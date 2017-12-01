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
        projectURL: '/dev/', 
    	// projectURL: 'http://project.test.com/app/' // 线上测试时的项目地址    
	},
	test: {
        host: ipv4,
        port: '3000',
        outputDir: path.resolve(__dirname, '../build/test'),
        browserUrl: 'http://' + ipv4 + ':3000/test/index.html',
        apiURL: 'http://localhost:3000',
        // apiURL: 'http://api.test.com', // 线上测试环境的接口域名
        projectURL: '/test/',
        // projectURL: 'http://project.test.com/app/' // 线上测试环境的项目地址     
	},
    prod: {
        host: ipv4,
        port: '3000',
        outputDir: path.resolve(__dirname, '../build/prod'),
        browserUrl: 'http://' + ipv4 + ':3000/prod/index.html',
        apiURL: 'http://localhost:3000',
        // apiURL: 'http://api.prod.com', // 线上生产环境的接口域名
        projectURL: '/prod/',
        // projectURL: 'http://project.prod.com/app/' // 线上生产环境的项目地址    
    },    
}