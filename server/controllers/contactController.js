const Message = require("../models/Message");
const User = require("../models/User");

exports.sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const userId = req.userId;

    if (!message) {
      return res.status(400).json({ msg: "Message is required" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const newMessage = await Message.create({ 
      userId: user._id,
      name: user.name,
      email: user.email,
      message 
    });

    res.status(201).json({ 
      msg: "Message sent successfully! We'll get back to you soon.",
      messageId: newMessage._id 
    });
  } catch (error) {
    console.error("Send Message Error:", error);
    res.status(500).json({ msg: "Failed to send message" });
  }
};

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json({ messages });
  } catch (error) {
    console.error("Get Messages Error:", error);
    res.status(500).json({ msg: "Failed to fetch messages" });
  }
};

exports.markAsRead = async (req, res) => {
  try {
    const { id } = req.params;
    await Message.findByIdAndUpdate(id, { isRead: true });
    res.json({ msg: "Message marked as read" });
  } catch (error) {
    res.status(500).json({ msg: "Failed to update message" });
  }
};
