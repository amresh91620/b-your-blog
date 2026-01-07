const rateLimit = require("express-rate-limit");

exports.signupLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { msg: "Too many signup attempts, try later" }
});
