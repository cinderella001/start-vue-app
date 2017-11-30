// 引入主模块
import Vue from 'vue';
// 引入根组件
import App from './components/App';
// 引入路由配置文件
import router from './router';
// 引入状态管理文件
import store from './store';

// 注册全局过滤器
import GlobalFilter from './assets/js/globalFilter';
for(let i in GlobalFilter){
	Vue.filter(i,GlobalFilter[i]);
}

// 注册全局方法
import GlobalMethod from './assets/js/globalMethod';
for(let i in GlobalMethod){
	Vue.prototype[i] = GlobalMethod[i];
}

// 处理移动端点击事件的300毫秒延迟
const FastClick = require('fastclick');
FastClick.attach(document.body);

// 挂载实例
const app = new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app');

