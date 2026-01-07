const validator = require("validator");

module.exports = (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword)
    return res.status(400).json({ msg: "All fields are required" });

  if (!validator.isEmail(email))
    return res.status(400).json({ msg: "Invalid email format" });

  if (password !== confirmPassword)
    return res.status(400).json({ msg: "Passwords do not match" });

  if (!validator.isStrongPassword(password, {
    minLength: 8,
    minNumbers: 1,
    minSymbols: 1
  }))
    return res.status(400).json({ msg: "Password is too weak" });

  next();
};
