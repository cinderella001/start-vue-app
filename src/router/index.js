import Vue from 'vue' ;
import Router from 'vue-router';
Vue.use(Router) ;

// 引入store
import store from '../store';
// 引入axios
import axios from '../assets/js/custom-axios';

// 同步加载路由
import Login from '../components/login/login';
import Index from '../components/index/index';
import Acty from '../components/acty/acty';
import Mine from '../components/mine/mine';

// 异步加载路由
// const AsyncRoute = resolve => require.ensure([],() => resolve(require('../components/asyncRoute/asyncRoute')),'asyncRoute');

const router = new Router({
	routes: [
		// 默认
		{
		    path: '/',
		    redirect: '/index'
		},		

		// 登录
		{
		    path: '/login',
		    name: 'login',	    
		  	component: Login
		},	

		// 首页
		{
		    path: '/index',
		    name: 'index',	    
		  	component: Index
		},		

		// 活动
		{
		    path: '/acty',
		    name: 'acty',	    
		  	component: Acty
		},		

		// 我的
		{
		    path: '/mine',
		    name: 'mine',	    
		  	component: Mine
		}				
	]
});

// 全局路由钩子
router.beforeEach((to,from,next) => {
	// 进入登录、活动这些路由，没有任何限制条件
	if(/(login)|(acty)/i.test(to.path)){
		next();
	}else{
		// 进入其他路由之前，需要获取当前用户的个人信息
		if(store.state.myInfo){
			next();
		}else{
			axios.post('/userInfo').then((res) => {
		        let data = res.data.data;

		        if(data){
			        store.dispatch('commitMyInfo',data);     
			        next();  
		        }else{
					// 如果登录态过期，可以进入首页这些路由，但要显示登录按钮
					if(/index/i.test(to.path)){
						next();
					}else{
						// 如果登录态过期，其他情况就要切换到登录路由，重新登录
						router.replace('/login');
					}
		        }             
		    });
		}		
	}
});

export default router;