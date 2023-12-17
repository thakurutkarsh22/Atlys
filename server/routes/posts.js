const express = require("express");
const router = express.Router();
const {
  createPost,
  getAllPosts,
  getNewsFeed,
  deletePost,
} = require("../controllers/postsController");

router.post("/", createPost);
router.get("/", getAllPosts);
router.get("/news-feed", getNewsFeed);
router.delete("/:postId", deletePost);

module.exports = router;
