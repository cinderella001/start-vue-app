// 定义全局过滤器
export default {
	// 将毫秒转换成日期
	msToDate(ms){
		let dDate = (typeof ms == 'number')?new Date(ms):new Date(Number(ms)),
			nMonth = dDate.getMonth()+1,
			nDay = dDate.getDate(),
			nHour = dDate.getHours(),
			nMinute = dDate.getMinutes(),
			sDate = nMonth + '-' + nDay + ' ' + (nHour<10?('0'+nHour):nHour) + ':' + (nMinute<10?('0'+nMinute):nMinute);
		
		return sDate;
	}
}
