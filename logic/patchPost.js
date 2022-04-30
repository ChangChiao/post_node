const { successHandle, errorHandle } = require('../handler');
const Post = require('../models/posts');

const patchPost = async(req, res, body) => {
	try {
		const id = req.url.split('/').pop();
		const { name, content } = JSON.parse(body);
		if (content === undefined || name === undefined) {
			errorHandle(res, '參數有缺');
			return;
		}
		// eslint-disable-next-line no-unused-vars
		Post.findByIdAndUpdate(id, {
			name,
			content,
		}, {new: true}, function(err, model){
			if(!model){
				errorHandle(res, '無此id');
			}else{
				successHandle(res, model);
			}
		});
		// const target = await Post.findById(id)
		// successHandle(res, target);
	} catch (error) {
		errorHandle(res, '修改失敗!');
	}
};

module.exports = patchPost;
