<style lang="less" scoped>
    @import '../../assets/styles/base.less';

    /*首页的私有样式*/
    .statusBar{
        display: flex;
        justify-content: center;
        align-items: center;
        h3{
            text-align: center;
            .fs(34);
        }
        button{
            margin-left: 20px;
            line-height: 1em;
            .fs(18);
        }
    }
    .icon{
        display: flex;
        justify-content: center;
        i{
            .fs(48);
            color: @blue;
        }     
    }
    .cover{
        margin: 40px auto;
        display: block;
        width: 300px;
    }
</style>

<template>
    <div class="page-index">      
        <!-- 一个简易的首页状态栏 -->
        <div class="statusBar">
            <h3>{{msg + (myInfo? myInfo.username : '路人')}}</h3>
            <button v-if="!myInfo" @click="$router.push('/login')">登录</button>            
        </div>  
        <div class="icon"><i class="iconfont icon-toys"></i></div>
        <img class="cover" src="~assets/img/cover.jpg" alt="" />
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data(){
            return {                
                msg: '你好啊，'
            }
        },
        computed: mapState([
            'myInfo'
        ])
    }
</script>


