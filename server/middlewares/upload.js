const multer = require("multer");
const { storage } = require("../config/cloudinary");

module.exports = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB max
});
