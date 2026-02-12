const express = require("express");
const router = express.Router();
const postController = require("../controllers/postControllers");

router.post("/create", postController.createPost);
router.get("/all", postController.getPosts);
router.get("/:id", postController.getPostById);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

module.exports = router;
