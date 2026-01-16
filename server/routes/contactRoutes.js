const express = require("express");
const { sendMessage, getAllMessages, markAsRead } = require("../controllers/contactController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/send-message", authMiddleware, sendMessage);
router.get("/messages", getAllMessages);
router.patch("/messages/:id/read", markAsRead);

module.exports = router;
