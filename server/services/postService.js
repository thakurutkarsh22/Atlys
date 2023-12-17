const Post = require("../models/Post");

exports.createPost = async ({ content, isAnonymous, user }) => {
  const post = new Post({
    content,
    isAnonymous,
    user,
  });

  await post.save();
  return post;
};

exports.getAllPosts = async () => {
  return Post.find();
};

exports.getNewsFeed = async () => {
  return Post.find({ isAnonymous: false });
};

exports.deletePost = async (postId) => {
  const post = await Post.findById(postId);

  if (!post) {
    throw new Error("Post not found");
  }

  await post.remove();
};
