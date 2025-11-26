const Post = require("../models/Post");

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const { title, company, location, description, skills, role } = req.body;

    if (!title || !company || !location || !description || !skills || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newPost = new Post({
      title,
      company,
      location,
      description,
      skills,
      role,
    });

    await newPost.save();
    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Server error" });
  }
};
