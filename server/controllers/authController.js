const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const generateOTP = require("../utils/generateOTP");
const sendEmail = require("../utils/sendEmail");

// ================== REGISTRATION OTP (IN-MEMORY) ==================
let otpStore = {};

/* STEP 1: SEND REGISTRATION OTP */
exports.sendOtp = async (req, res) => {
  const { email } = req.body;

  try {
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ msg: "Email already registered" });
    }

    const otp = generateOTP();

    otpStore[email] = {
      otp,
      expires: Date.now() + 5 * 60 * 1000, // 5 min
    };

    await sendEmail({
      email,
      subject: "Your Registration OTP",
      otp,
      message: `Your OTP is ${otp}. It expires in 5 minutes.`,
    });

    res.status(200).json({ msg: "OTP sent to your email" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Failed to send OTP" });
  }
};

/* STEP 2: VERIFY REGISTRATION OTP */
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  const record = otpStore[email];

  if (!record) {
    return res.status(400).json({ msg: "Please request OTP first" });
  }

  if (record.expires < Date.now()) {
    delete otpStore[email];
    return res.status(400).json({ msg: "OTP expired" });
  }

  if (record.otp !== otp) {
    return res.status(400).json({ msg: "Invalid OTP" });
  }

  res.status(200).json({ msg: "Email verified successfully" });
};

/* STEP 3: COMPLETE REGISTRATION */
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const record = otpStore[email];
    if (!record || record.expires < Date.now()) {
      return res.status(400).json({ msg: "OTP verification required" });
    }

    await User.create({
      name,
      email,
      password,
      isVerified: true,
    });

    delete otpStore[email];

    res.status(201).json({ msg: "Account created successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Registration failed" });
  }
};

// ================== LOGIN ==================
exports.login = async (req, res) => {
  const { email, password, rememberMe } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        msg: "This email is not registered. Please sign up first.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        msg: "Incorrect password. Please try again or reset your password.",
      });
    }

    const expiresIn = rememberMe ? "7d" : "1h";

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn }
    );

    res.status(200).json({
      msg: "Welcome back! Login successful.",
      token,
      user: { name: user.name, email: user.email, role: user.role },
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

// ================== FORGOT PASSWORD ==================
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ msg: "Email not registered" });
    }

    const otp = generateOTP();
    const hashedOtp = crypto
      .createHash("sha256")
      .update(otp)
      .digest("hex");

    user.resetOtp = hashedOtp;
    user.resetOtpExpire = Date.now() + 1 * 60 * 1000; // 5 min
    await user.save();

    await sendEmail({
      email: user.email,
      subject: "Password Reset OTP",
      otp,
    });

    res.json({ msg: "OTP sent to your email" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

// ================== RESET PASSWORD (SAFE FIX) ==================
exports.resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;

    if (!newPassword || typeof newPassword !== "string") {
      return res.status(400).json({ msg: "Valid password required" });
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordRegex.test(newPassword)) {
      return res.status(400).json({
        msg: "Password must be strong (8 chars, upper, lower, number, special)",
      });
    }

    const hashedOtp = crypto
      .createHash("sha256")
      .update(otp)
      .digest("hex");

    const user = await User.findOne({
      email,
      resetOtp: hashedOtp,
      resetOtpExpire: { $gt: Date.now() },
    });

    // 🔐 MAIN SAFETY FIX
    if (!user) {
      await User.updateOne(
        { email },
        { $unset: { resetOtp: "", resetOtpExpire: "" } }
      );
      return res.status(400).json({ msg: "OTP invalid or expired" });
    }

    user.password = newPassword;
    user.resetOtp = undefined;
    user.resetOtpExpire = undefined;
    await user.save();

    res.json({ msg: "Password reset successful" });
  } catch (err) {
    console.error("Reset Password Error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};
