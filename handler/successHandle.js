const header = require('../config/header');

/**
 * @param {Object} res - res物件
 * @param {Array} posts - postlist
 */
function successHandle(res, posts) {
	res.writeHead(200, header);
	res.write(
		JSON.stringify({
			status: 'success',
			posts,
		})
	);
	res.end();
}

module.exports = successHandle;
