import Vue from 'vue';
import Vuex from 'vuex';
import PublicStore from './public';
import PrivateStore from './private';
Vue.use(Vuex);

// 导出整个store
export default new Vuex.Store({
    // 公共
    ...PublicStore,

    // 私有
    modules: PrivateStore
});
