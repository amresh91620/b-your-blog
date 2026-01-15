const app = require("./app");
const connectDB = require("./config/db");
require("dotenv").config();

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Local: http://localhost:${PORT}`);
  console.log(`Network: Access via your IP address on port ${PORT}`);
});
