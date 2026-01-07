const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();

// ✅ CORS ko aise configure karein (Sirf app.use(cors()) se kaam nahi chalega)
app.use(cors({
    origin: "http://localhost:5173", // Apne frontend ka URL yahan likhein (Vite ka default yahi hota hai)
    credentials: true,               // Taaki cookies/tokens transfer ho sakein
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// routes
app.use("/api/auth", authRoutes);

module.exports = app;