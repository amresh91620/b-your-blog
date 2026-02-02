const express = require("express");
const { sendOtp, verifyOtp, register, login, forgotPassword, resetPassword, changePassword, logoutAllSessions, deleteAccount } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/send-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.post("/complete-registration", register); 
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/change-password", authMiddleware, changePassword);
router.post("/logout-all-sessions", authMiddleware, logoutAllSessions);
router.delete("/delete-account", authMiddleware, deleteAccount);
module.exports = router;