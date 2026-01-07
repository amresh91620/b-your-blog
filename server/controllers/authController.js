const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const generateOTP = require("../utils/generateOTP");
const sendEmail = require("../utils/sendEmail");

// Temporary store for OTPs (In-memory) - Real app mein Redis use kar sakte hain
let otpStore = {}; 

/* STEP 1: SEND OTP TO EMAIL */
exports.sendOtp = async (req, res) => {
  const { email } = req.body;
  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ msg: "Email already registered" });

    const otp = generateOTP();
    // OTP ko 5 min ke liye store karein
    otpStore[email] = {
      otp: otp,
      expires: Date.now() + 5 * 60 * 1000
    };

    await sendEmail({
      email: email,
      subject: "Your Registration OTP",
      otp: otp,
      message: `Your OTP is ${otp}. It expires in 5 minutes.`
    });

    res.status(200).json({ msg: "OTP sent to your email" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Failed to send email. Check your SMTP settings." });
  }
};

/* STEP 2: VERIFY OTP */
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  const record = otpStore[email];

  if (!record) return res.status(400).json({ msg: "Please request OTP first" });
  if (record.expires < Date.now()) return res.status(400).json({ msg: "OTP expired" });
  if (record.otp !== otp) return res.status(400).json({ msg: "Invalid OTP" });

  res.status(200).json({ msg: "Email verified successfully" });
};

/* STEP 3: FINAL REGISTER (Save to DB) */
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
   
    const user = await User.create({
      name,
      email,
      password, // Direct password
      isVerified: true
    });

    delete otpStore[email];
    res.status(201).json({ msg: "Account created successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Registration failed" });
  }
};
exports.login = async (req, res) => {
  const { email, password, rememberMe } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const expiresIn = rememberMe ? "7d" : "1h";
    const cookieMaxAge = rememberMe ? 7 * 24 * 60 * 60 * 1000 : 60 * 60 * 1000;

    // JWT_SECRET ka .env mein hona zaroori hai
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || "default_secret", 
      { expiresIn }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: cookieMaxAge,
    });

    // Frontend ko response bhejna
    res.status(200).json({ 
      msg: "Login successful", 
      user: { name: user.name, email: user.email, role: user.role },
      token 
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

// Request Password Reset OTP
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "Email not registered" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    // Hash OTP to store in DB for security
    const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");

    user.resetOtp = hashedOtp;
    user.resetOtpExpire = Date.now() + 5 * 60 * 1000; // 5 min
    await user.save();

    await sendEmail({
      email: user.email,
      subject: "Password Reset OTP",
      otp: otp
    });

    res.json({ msg: "OTP sent to your email" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    if (newPassword.length < 6) return res.status(400).json({ msg: "Password too short" });

    const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");

    const user = await User.findOne({
      email,
      resetOtp: hashedOtp,
      resetOtpExpire: { $gt: Date.now() },
    });

    if (!user) return res.status(400).json({ msg: "OTP invalid or expired" });

    // Set new password (the pre-save hook in User model will hash this)
    user.password = newPassword;
    user.resetOtp = undefined;
    user.resetOtpExpire = undefined;
    await user.save();

    res.json({ msg: "Password reset successful" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};