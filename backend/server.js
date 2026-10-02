const express = require("express");
const cors = require("cors");

const githubRoutes = require("./routes/githubRoutes");

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/github", githubRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("GitHub Developer Analytics Backend is running!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});