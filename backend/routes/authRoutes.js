const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User.js");
const { generateToken } = require("../utils/jwtUtils.js");

const router = express.Router();

// Sign-Up Route
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    // Generate token
    const token = generateToken(newUser);

    res.status(201).json({ message: "User created successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Sign-In Route
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare provided password with stored hashed password
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Generate token
    const token = generateToken(existingUser);

    res.status(200).json({
      message: "Login successful",
      token,
      user: { username: existingUser.username, email: existingUser.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});
router.get('/getuser', async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find(); // Correct method to fetch all documents from the collection
    res.status(200).json(users); // Return users as a JSON response
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).json({ error: 'Error fetching users' });
  }
});

module.exports = router;
