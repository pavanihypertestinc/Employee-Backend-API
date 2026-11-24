
const express = require("express");

// Create Express application
const app = express();

// Port number
const PORT = 5000;

// Middleware to read JSON data
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Employee Backend API is running!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
