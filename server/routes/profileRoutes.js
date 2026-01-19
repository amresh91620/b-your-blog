const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const upload = require("../middlewares/upload");
const { getProfile, updateProfile } = require("../controllers/profileController");

// GET user profile
router.get("/", auth, getProfile);

// PATCH update profile (name, bio, profile image)
router.patch("/", auth, upload.single("profileImage"), updateProfile);

module.exports = router;
