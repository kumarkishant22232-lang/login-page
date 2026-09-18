const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve your website files
app.use(express.static(__dirname));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "INDEX.HTML"));
});

// Test backend
app.get("/api", (req, res) => {
    res.json({
        success: true,
        message: "TEAM SPIRIT backend is working!"
    });
});

// REGISTER
app.post("/api/register", (req, res) => {
    const { username, email, password } = req.body;

    console.log("Register request:", req.body);

    if (!username || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    res.json({
        success: true,
        message: "Registration successful!"
    });
});

// LOGIN
app.post("/api/login", (req, res) => {
    const { username, password } = req.body;

    console.log("Login request:", req.body);

    // Demo account
    if (username === "kishant" && password === "kishant123") {
        return res.json({
            success: true,
            message: "Login successful!",
            username: username
        });
    }
     if (username === "debosmita" && password === "debosmita123") {
        return res.json({
            success: true,
            message: "Login successful!",
            username: username
        });
    }
     if (username === "dharmvir" && password === "dharmvir123") {
        return res.json({
            success: true,
            message: "Login successful!",
            username: username
        });
    }
     if (username === "aditya" && password === "aditya123") {
        return res.json({
            success: true,
            message: "Login successful!",
            username: username
        });
    }
     if (username === "komal" && password === "komal123") {
        return res.json({
            success: true,
            message: "Login successful!",
            username: username
        });
    }
    res.status(401).json({
        success: false,
        message: "Invalid username or password"
    });
});

// Start server
app.listen(PORT, () => {
    console.log("================================");
    console.log("       TEAM SPIRIT SERVER");
    console.log("================================");
    console.log(`Server: http://localhost:${PORT}`);
});