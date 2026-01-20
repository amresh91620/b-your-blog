const User = require("../models/User");
const { cloudinary } = require("../config/cloudinary");

// GET PROFILE
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) return res.status(404).json({ msg: "User not found" });

    // Ensure profileImage is a full URL
    if (user.profileImage && !user.profileImage.startsWith("http")) {
      user.profileImage = `${process.env.BASE_URL || "http://localhost:5000"}${user.profileImage}`;
    }

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};

// PATCH PROFILE
exports.updateProfile = async (req, res) => {
  try {
    const updates = {};
    const { name, bio } = req.body || {};

    if (name) updates.name = name;
    if (bio) updates.bio = bio;

    // If a file is uploaded via Cloudinary
    if (req.file && req.file.path) {
      updates.profileImage = req.file.path;
    }

    const user = await User.findByIdAndUpdate(
      req.userId,
      { $set: updates },
      { new: true }
    ).select("-password");

    if (!user) return res.status(404).json({ msg: "User not found" });

    res.json({
      msg: "Profile updated successfully",
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Profile update failed" });
  }
};
