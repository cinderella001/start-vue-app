const uuidv1 = require('uuid/v1');

// 获取本地的相关参数
const contentType = 'application/x-www-form-urlencoded; charset=UTF-8',
	token = localStorage.getItem('token'),
	deviceId = localStorage.getItem('deviceId') || (() => {
		let deviceId = uuidv1();
		localStorage.setItem('deviceId',deviceId);
		return deviceId;
	})();	

export {
	contentType,
	token,
	deviceId
}