const { successHandle, errorHandle } = require("../handler");
const Post = require("../models/posts");
const postPost = async(req, res, body) => {
  try {
    const { content, image, name, likes } = JSON.parse(body);
    Post.create({
      content,
      image,
      name,
      likes,
    });
	const post = await Post.find()
    successHandle(res, post);
  } catch (error) {
    errorHandle(res, "參數有缺");
    console.log("error", error);
  }
};

module.exports = postPost;
