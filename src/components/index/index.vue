<style lang="less" scoped>
    @import '../../assets/styles/base.less';

    /*首页*/
    .statusBar{
        margin: 1rem 0 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;

        h3{          
            .fs(34);
        }
        
        button{
            margin-left: 0.2rem;
        }
    }

    .iconfont{
        display: block;
        text-align: center;
        .fs(48);
        .cl(@blue);
    }     

    .cover{
        margin: 0.8rem auto;
        display: block;
        width: 6rem;
    }
</style>

<template>
    <div class="page-index">      
        <!-- 首页状态 -->
        <div class="statusBar">
            <h3>{{'你好啊，' + (myInfo? myInfo.username : '路人')}}</h3>
            <mt-button v-if="!myInfo" @click="$router.push('/login')">登录</mt-button>            
        </div>  
        <i class="iconfont icon-toys"></i>
        <img class="cover" src="~assets/img/cover.jpg" alt="" />
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data(){
            return {                

            }
        },
        computed: mapState([
            'myInfo'
        ])
    }
</script>


