// 创建一个对象来存储应用启动时的初始状态
const state = {
    myInfo: null,
    showLoading: false    
}

// 创建一个对象来存储上述状态的派生值
const getters = {

}

// 创建一个对象来存储状态变更函数，第一个参数是当前的state，第二个参数是提交变更时携带的载荷参数，注意mutation函数必须同步执行
const mutations = {
    myInfo(state,payload){
        let myInfo = state.myInfo;
        if(myInfo){
            state.myInfo = Object.assign({},myInfo,payload);
        }else{
            state.myInfo = payload;
        }        
    },
    showLoading(state,payload){
        state.showLoading = payload;
    }                      
}

// 创建一个对象来存储状态变更的提交函数，接受一个与store实例具有相同方法和属性的context对象（但并不是store实例本身），这里使用ES2015的参数解构来简化代码，注意action函数可以包含任何异步操作
const actions =  {
    commitMyInfo({commit,state},payload){
        commit('myInfo',payload);
    }  
}

export default {
    state,
    getters,
    mutations,
    actions
}