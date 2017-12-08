# start-vue-app

A simple CLI for scaffolding a web app with Vue.js.

## Features
``` 
-vue
-vue-router
-vuex
-less
-iconfont
-es6
-axios
-webpack
-json-server
-faker
```

## Installation
``` 
git clone https://github.com/brandonhulala/start-vue-app.git

npm install 
```

## Structure
```
|——config           	-- webpack配置目录
|——src              	-- 源文件目录
    |——index.html 	-- 入口html文件
    |——main.js 		-- 入口js文件
    |——router		-- 路由配置目录
    |——components	-- 组件目录
	|——App.vue  	-- 根组件
    	|——login	-- 登录页
    	|——index	-- 首页
    	|——acty		-- 活动页
	|——mine		-- 个人页
        ...         
    |——assets       	-- 静态资源目录，包括图片、样式、脚本类库	
    |——store		-- 状态管理目录
|——mock                 -- 虚拟数据配置目录	
|——package.json		-- 项目配置文件	
|——.babelrc	    	-- es6转码文件
|——README.md 		-- 使用文档
|——favicon.ico 		-- chrome浏览器网站图标
|——.gitignore		-- .gitignore配置文件
```

## Usage
``` 
npm run mockDev     -- 开启webpack-dev-server和json-server，前者用于实现HMR，后者用于返回虚拟数据

npm run mockTest    -- 打包文件到prod目录下的test文件夹，用于发布到线上的测试环境

npm run mockNormal  -- 打包文件到prod目录下的normal文件夹，用于发布到线上的正式环境
```

## Env
* 项目配置了三种环境，即开发、测试和正式，其中**开发**是在本地调试，对应一般意义上的**development**，后两者则是把项目文件打包出来并发布到线上，对应一般意义上的**production**

* 这里的**测试**不是指单元测试，和**正式**一样都是属于**生产**环境，即都会生产打包文件到指定目录而不是到内存，区别在于前者使用的是后台测试环境下的api接口，后者则对应后台那边的正式环境

* 默认开发环境下会自动打开一个浏览器页面在本地进行实时预览，如果生产环境下也想在本地预览打包后的页面，直接在浏览器的地址栏输入
```
   http:// + ipv4 + :3000/test/index.html 或者 http:// + ipv4 + :3000/normal/index.html
```
* 实际开发需要打开config目录下的address.js文件，手动添加后台的接口请求域名和项目存放地址
