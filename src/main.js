// 引入主模块
import Vue from 'vue';
// 引入根组件
import App from './components/App';
// 引入路由配置文件
import router from './router';
// 引入vuex管理文件
import store from './store';

// 配置插件
import './utils/plugin';
// 配置过滤器
import './utils/filter';

// 处理移动端点击事件的300毫秒延迟
const FastClick = require('fastclick');
FastClick.attach(document.body);

// 挂载实例
const app = new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app');

