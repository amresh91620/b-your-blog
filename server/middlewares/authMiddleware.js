const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] || req.cookies?.token;
    
    if (!token) {
      return res.status(401).json({ msg: "Please login to send a message" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "default_secret");
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Invalid token. Please login again" });
  }
};

module.exports = authMiddleware;
