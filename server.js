require("dotenv").config();
const express = require("express");
const cors = require("cors"); 
const authMiddleware = require("./middleware/auth")

const app = express();


const connectDB = require("./config/db");
connectDB()

const tasks = require("./Routes/taskRoute");
const userRoutes = require("./Routes/userRoute");

// initialize middleware
app.use(express.json({ extended: false }));
app.use(cors());
// app.get("/", (req, res) => res.send("Server up and running"));

app.use("/api/tasks",authMiddleware, tasks);
app.use("/",userRoutes);

// setting up port
const PORT = process.env.NODE_PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});