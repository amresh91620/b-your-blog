const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: `"Blog Journal" <${process.env.EMAIL_USER}>`,
      to: options.email,
      subject: options.subject,
      html: options.otp ? `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2>Password Reset OTP</h2>
          <p>Your OTP for password reset is: <b style="font-size: 1.5rem; color: #14b8a6;">${options.otp}</b></p>
          <p>This code is valid for 5 minutes.</p>
        </div>` : `<p>${options.message}</p>`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Email sending failed:", error.message);
    throw new Error("Failed to send email");
  }
};

module.exports = sendEmail;