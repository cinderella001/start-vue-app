// 获取url中的相关参数
const href = location.href,
	idx = href.indexOf('#'),
	search = location.search,
	getQueryString = (name) => {
	    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
	    var r = search.substr(1).match(reg);
	    if (r != null) {
	        return unescape(r[2]);
	    }
	    return null;
	};	
const routerName = getQueryString('routerName'),
	routerParams = getQueryString('routerParams'),
	signURL = (idx > -1) ? href.substring(0,idx) : href;

// 获取本地的相关参数
const contentType = 'application/x-www-form-urlencoded; charset=UTF-8',
	token = localStorage.getItem('token');

export {
	routerName,
	routerParams,
	signURL,
	contentType,
	token
}