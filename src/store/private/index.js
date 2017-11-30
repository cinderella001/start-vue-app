// 创建私有模块
const store_index = {
    namespaced: true, // 设为true使该模块成为命名空间模块，然后它的所有getter、mutation和action都要根据模块注册的路径调整命名
    state: {},
    getters: {},
    mutations: {},
    actions: {}
}

export default {
	index: store_index
}