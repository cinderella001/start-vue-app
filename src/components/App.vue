<style lang="less">
    @import '../assets/styles/normalize.css';
    @import '../assets/styles/iconfont/font.css';
    @import '~vue2-animate/src/vue2-animate.less';
    @import '../assets/styles/common.less';
</style>

<template>
    <div class="app">        
        <!-- 路由 -->
        <router-view></router-view>

        <!-- 底部菜单栏 -->
        <mt-tabbar fixed v-model="currTab" v-if="currTab">
          <mt-tab-item id="index"><router-link to="/index">首页</router-link></mt-tab-item>
          <mt-tab-item id="acty"><router-link to="/acty">活动</router-link></mt-tab-item>
          <mt-tab-item id="mine"> <router-link to="/mine">我的</router-link></mt-tab-item>
        </mt-tabbar>        
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data(){
            return {                
                currTab: 'index'
            }
        },
        computed: mapState([
            'myInfo'
        ]),
        watch: {
            $route(to,from){
                // 同步当前菜单选项
                let result = /index|acty|mine/.exec(to.path);
                this.currTab = result ? result[0]: '';                 
            }            
        }
    }
</script>


