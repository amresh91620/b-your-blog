const express = require("express");
const { sendOtp, verifyOtp, register,login,forgotPassword,resetPassword } = require("../controllers/authController");
const router = express.Router();


router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/complete-registration", register); 
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
module.exports = router;