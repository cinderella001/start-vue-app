// 获取本机的IPv4地址
const os = require('os'),path = require('path'),ifaces = os.networkInterfaces();
let ipv4 = '';
for (let key in ifaces) {
    ifaces[key].forEach((item,index) => {
        if (item.family == 'IPv4' && item.address != '127.0.0.1' && !item.internal) {
            ipv4 = item.address;
            return;
        }
    });
}    

module.exports = {
	dev: {
		host: ipv4,
		port: '8080',
		// outputDir: '' // 输出到内存
        browserUrl: 'http://' + ipv4 + ':8080/dev/index.html',
    	apiURL: 'http://localhost:3000',
        // apiURL: 'http://api.test.com', // 线上测试时的接口域名
        projectURL: '/dev/'
	},
	test: {
        host: ipv4,
        port: '3000',
        outputDir: path.resolve(__dirname, '../prod/test'), // 输出到指定目录
        browserUrl: 'http://' + ipv4 + ':3000/test/index.html',
        apiURL: 'http://localhost:3000',
        // apiURL: 'http://api.test.com', // 线上测试环境的接口域名
        projectURL: '/test/',
        // projectURL: 'http://project.test.com/app/' // 线上测试环境的项目地址
	},
    normal: {
        host: ipv4,
        port: '3000',
        outputDir: path.resolve(__dirname, '../prod/normal'), // 输出到指定目录
        browserUrl: 'http://' + ipv4 + ':3000/normal/index.html',
        apiURL: 'http://localhost:3000',
        // apiURL: 'http://api.normal.com', // 线上正式环境的接口域名
        projectURL: '/normal/',
        // projectURL: 'http://project.normal.com/app/' // 线上正式环境的项目地址    
    } 
}
