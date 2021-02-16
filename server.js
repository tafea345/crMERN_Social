const express = require("express");
const connectDB = require("./config/db");

const app = express();
// connect to db
connectDB();

// init middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get("/", (res, req) => req.send("API running"));

// routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
