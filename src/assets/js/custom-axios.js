import axios from 'axios';
import qs from 'qs';
import store from '../../store';
import { token,contentType } from './globalVar';

// 添加axios插件的全局配置
axios.defaults.baseURL = process.env.apiURL;
axios.defaults.headers['Content-Type'] = contentType;

// 添加axios插件的拦截器
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

// 导出变量
export default axios;