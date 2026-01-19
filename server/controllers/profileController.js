const User = require("../models/User");

// GET PROFILE
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) return res.status(404).json({ msg: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

// PATCH PROFILE
exports.updateProfile = async (req, res) => {
  try {
    const updates = {};

    if (req.body.name) updates.name = req.body.name;
    if (req.body.bio) updates.bio = req.body.bio;

    // If profile image uploaded
    if (req.file) {
      updates.profileImage = `/uploads/profile/${req.file.filename}`; // local storage
      // If using Cloudinary: updates.profileImage = req.file.path;
    }

    const user = await User.findByIdAndUpdate(
      req.userId,          // <-- use req.userId, not req.user.id
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
