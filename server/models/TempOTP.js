const mongoose = require("mongoose");
const tempOTPSchema = new mongoose.Schema({
  email: { type: String, required: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 300 } // 5 min mein auto delete
});
module.exports = mongoose.model("TempOTP", tempOTPSchema);