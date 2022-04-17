const { successHandle, errorHandle } = require('../handler');
const Post = require('../models/posts');
const deletePostAll = async (res) => {
	// eslint-disable-next-line no-unused-vars
	await Post.deleteMany({});
	successHandle(res, []);
};
const deletePostSingle = async (req, res) => {
	const id = req.url.split('/').pop();
	try {
		// eslint-disable-next-line no-unused-vars
		await Post.findByIdAndDelete(id);
		successHandle(res, {});
	} catch (error) {
		errorHandle(res, '無此id');
	}
};
module.exports = {
	deletePostAll,
	deletePostSingle,
};
