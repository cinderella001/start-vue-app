<style lang="less" scoped>
    @import '../../assets/styles/base.less';

    /*个人中心*/
    .mint-header{
        .mint-button{
            height: auto;
        }
    }

    .info{
        margin: 1rem 0.4rem;
        display: flex;

        .avatar{
            margin-right: 0.2rem;
            display: block;
            .roundImg(2rem);
        }

        .username-email{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .fs(18);
        }
    }

    .cells{
        padding-left: 0.4rem;
        position: relative;
        .bor1-top;
        .bor1-bottom;

        .mint-cell:not(:last-child){
            .bor1-bottom;
        }
    }
</style>

<template>
    <div class="page-mine">        
        <!-- 个人信息 -->
        <mt-header :title="title">
            <mt-button slot="left" @click="back">返回</mt-button>     
            <mt-button slot="right" @click="logout">退出</mt-button>
        </mt-header>
        <div class="info">
            <img class="avatar" v-lazy="myInfo.avatar" alt="" />         
            <div class="username-email">
                <div>{{'姓名：' + myInfo.username}}</div>
                <div>{{'邮箱：' + myInfo.email}}</div>
            </div>
        </div>
        <div class="cells">
            <mt-cell title="Vue" is-link to="https://cn.vuejs.org/v2/guide" value="官方文档"></mt-cell>  
            <mt-cell title="Mint UI" is-link to="https://github.com/ElemeFE/mint-ui" value="github地址"></mt-cell>
            <mt-cell title="start-vue-app" is-link to="https://github.com/brandonhulala/start-vue-app" value="前去点赞"></mt-cell>                           
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { Toast } from 'mint-ui';

    export default {
        data(){
            return {                
                title: '个人中心'
            }
        },
        computed: mapState([
            'myInfo'
        ]),
        methods: {
            // 返回上一页
            back(){
                this.$router.back();
            },

            // 退出登录，清空所有个人信息
            logout(){
                this.$store.dispatch('commitMyInfo',null);
                localStorage.removeItem('token');
                this.$router.replace('/login');
            }
        }          
    }
</script>


