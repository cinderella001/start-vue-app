<style lang="less">
    @import '../assets/styles/normalize.css';
    @import '../assets/styles/iconfont/font.css';
    @import '../assets/styles/common.less';
</style>

<template>
    <div class="app">        
        <!-- 这里可以放置加载等待、提示弹窗(自行消失和手动操作)、输入框(关键字搜索)等等 -->

        <!-- 路由 -->
        <router-view></router-view>

        <!-- 一个简易的底部导航栏 -->
        <div class="tabbar" v-if="showTabbar">
            <router-link to="/index">首页</router-link>
            <router-link to="/acty">活动</router-link>
            <router-link to="/mine">我的</router-link>
        </div>        
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data(){
            return {                
                env: process.env.NODE_ENV
            }
        },
        computed: {
            // 获取相关状态参数
            ...mapState([
                'myInfo'
            ]),

            // 显示底部导航
            showTabbar(){
                // 获取当前的路由对象
                let route = this.$route;

                // 当处于首页、活动以及我的三个路由模块时，显示底部民航
                if(/index|acty|mine/i.test(route.path)){
                    return true;
                }else{
                    return false;
                }                    
            }            
        } 
    }
</script>


