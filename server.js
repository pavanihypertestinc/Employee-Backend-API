
// Load environment variables
require("dotenv").config();

// Import packages
const express = require("express");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");

// Create Express application
const app = express();

// Set server port
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Home API
app.get("/", (req, res) => {
    res.status(200).send("Employee Backend API is running!");
});

// Test API
app.get("/test", (req, res) => {
    res.status(200).send("Task routes are being tested!");
});

// Connect Task Routes (Only once)
app.use("/api/tasks", taskRoutes);

// Start Server
const startServer = async () => {
    try {
        // Connect MongoDB
        await connectDB();

        // Start Express server
        app.listen(PORT, () => {
            console.log("MongoDB connected successfully!");
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.log("Server startup failed:", error.message);
        process.exit(1);
    }
};

// Run server
startServer();

