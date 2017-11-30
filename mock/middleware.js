const faker = require('faker'),
	Token = require('./token.js');

faker.locale = 'zh_CN';

module.exports = (req, res, next) => {
	// 将添加数据的POST请求转换为获取数据的GET请求
	if(req.method == 'POST'){
		req.method = 'GET';		
	}

	// 如果是用户登录入口，先根据上传的用户信息生成一个令牌，然后将用户信息与对应的令牌返回给客户端
	if(req.path == '/login'){
		let userInfo = req.body;			
		// 添加一个随机生成的头像和邮箱
		userInfo.avatar = faker.image.avatar();
		userInfo.email = faker.internet.email();

		token = Token.createToken(userInfo);

		res.status(200).send({
			data: {
				userInfo: userInfo,
				token: token
			},
			msg: '登录成功'
		});
	}
	// 如果是用户信息入口，获取上传的token并进行验证，如果token未过期返回对应的用户信息，如果过期了就返回空
	else if(req.path == '/userInfo'){
		let token = req.query.token,
			userInfo = Token.decodeToken(token);

		res.status(200).send({
			data: userInfo,
			msg: userInfo ? '成功获取用户信息' : '用户未登录'
		});
	}
	// 如果是其他入口，直接在下一步中返回虚拟数据
	else{
		next();
	}
}
