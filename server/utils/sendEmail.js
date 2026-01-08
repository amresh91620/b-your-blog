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

    // Premium HTML Template
    const premiumTemplate = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.1); border: 1px solid #f0f0f0;">
        <div style="background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px; letter-spacing: 1px;">Blog Journal</h1>
        </div>
        <div style="padding: 40px; background-color: #ffffff; color: #334155;">
          <h2 style="margin-top: 0; color: #1e293b; font-size: 20px; text-align: center;">Verify Your Identity</h2>
          <p style="font-size: 16px; line-height: 1.6; text-align: center; color: #64748b;">
            To reset your password, please use the following One-Time Password (OTP). This code is valid for <strong>5 minutes</strong>.
          </p>
          <div style="margin: 30px 0; text-align: center;">
            <div style="display: inline-block; padding: 15px 40px; background-color: #f1f5f9; border-radius: 8px; border: 2px dashed #14b8a6;">
              <span style="font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #14b8a6;">${options.otp}</span>
            </div>
          </div>
          <p style="font-size: 14px; color: #94a3b8; text-align: center; margin-top: 20px;">
            If you didn't request this email, you can safely ignore it.
          </p>
        </div>
        <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #f1f5f9;">
          <p style="font-size: 12px; color: #94a3b8; margin: 0;">&copy; ${new Date().getFullYear()} Blog Journal. All rights reserved.</p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"Blog Journal" <${process.env.EMAIL_USER}>`,
      to: options.email,
      subject: options.subject,
      html: options.otp ? premiumTemplate : `<p>${options.message}</p>`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Email sending failed:", error.message);
    throw new Error("Failed to send email");
  }
};

module.exports = sendEmail;