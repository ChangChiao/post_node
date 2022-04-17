const { successHandle, errorHandle } = require('../handler');
const Post = require('../models/posts');

const patchPost = async(req, res, body) => {
	const id = req.url.split('/').pop();
	const { name, content } = JSON.parse(body);
	if (content === undefined && name === undefined) {
		errorHandle(res, '參數有缺');
		return;
	}
	try {
		// eslint-disable-next-line no-unused-vars
		await Post.findByIdAndUpdate(id, {
			name,
			content,
		});
		const target = await Post.findById(id)
		successHandle(res, target);
	} catch (error) {
		errorHandle(res, '無此ID');
	}
};

module.exports = patchPost;
