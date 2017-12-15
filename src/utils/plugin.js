import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueScroller from 'vue-scroller';

import qs from 'qs';
import store from '../store';
import { token,contentType } from './variable';

/***********配置axios*************/
// 修改全局属性
axios.defaults.baseURL = process.env.apiURL;
axios.defaults.headers['Content-Type'] = contentType;
// 添加拦截器
axios.interceptors.request.use((config) => {
	// 显示loading
	store.commit('showLoading',true);

	// 在上传参数中添加令牌、版本号等参数
	config.params = Object.assign(config.params || {},{token: token,version: '1.0'});

	// 当请求方式为POST并且格式为form表单数据的时候，将json对象格式的上传数据转换为form-data格式
	if(config.method.toUpperCase() == 'POST' && (config.headers['Content-Type'] == contentType)){
		config.data = qs.stringify(config.data);
	}

	return config;
});
axios.interceptors.response.use((response) => {
	// 隐藏loading
	store.commit('showLoading',false);

	return response;
});

// 注册插件
Vue.use(VueAxios, axios);
Vue.use(VueScroller)