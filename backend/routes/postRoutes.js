const express = require("express");
const router = express.Router();
const postController = require("../controllers/postControllers");

router.post("/create", postController.createPost); // Create a post
router.get("/all", postController.getPosts); // Get all posts
router.get("/:id", postController.getPostById); // Get post by ID
router.put("/:id", postController.updatePost); // Update a post
router.delete("/:id", postController.deletePost); // Delete a post

module.exports = router;
