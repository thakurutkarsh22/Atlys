const postService = require("../services/postService");

const createPost = async (req, res) => {
  try {
    const post = await postService.createPost(req.body);
    res.json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const getNewsFeed = async (req, res) => {
  try {
    const newsFeed = await postService.getNewsFeed();
    res.json({ success: true, data: newsFeed });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const deletePost = async (req, res) => {
  const postId = req.params.postId;

  try {
    await postService.deletePost(postId);
    res.json({ success: true, message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  deletePost,
  getNewsFeed,
  getAllPosts,
  createPost,
};
