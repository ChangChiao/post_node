const header = require('../config/header');
/**
 * @param {Object} res res物件
 * @param {string} errorMessage 錯誤訊息
 * @param {number} errorCode http status code
 */
const errorHandle = (res, errorMessage, errorCode = 400) => {
	res.writeHead(errorCode, header);
	res.write(
		JSON.stringify({
			status: 'false',
			message: errorMessage,
		})
	);
	res.end();
};

module.exports = errorHandle;
