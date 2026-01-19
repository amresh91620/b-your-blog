const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // Get token from header or cookie
    const authHeader = req.headers.authorization;
    const token = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : req.cookies?.token;

    if (!token) {
      return res.status(401).json({ msg: "Please login to continue" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    console.error("Auth error:", error.message);
    return res.status(401).json({ msg: "Invalid or expired token. Please login again" });
  }
};

module.exports = authMiddleware;
