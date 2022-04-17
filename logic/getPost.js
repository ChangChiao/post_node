const Post = require('../models/posts');
const { successHandle } = require('../handler');
const getPost = async(res) => {
	try {
		const postList = await Post.find();
		successHandle(res, postList);
	} catch (error) {
		console.warn('error', error);
	}
};

module.exports = getPost;
