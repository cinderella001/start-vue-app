<style lang="less" scoped>
    @import '../../assets/styles/base.less';

    /*个人中心的私有样式*/
    h3{
        text-align: center;
        .fs(34);
    }
    .info{
        display: flex;
        justify-content: center;
        .avatar-container{
            margin-right: 0.4rem;
            width: 2rem;
            height: 2rem;
            .bgImg('avatar.png');
            .bgSize;
            img{
                display: block;
                width: 100%;
                height: 100%;
                .borR(2,rem);
                object-fit: cover;
            }
        }
        .username-email{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .fs(18);
        }
    }
</style>

<template>
    <div class="page-mine">        
        <!-- 一个简易的信息展示框 -->
        <h3>{{msg}}</h3>
        <div class="info">
            <div class="avatar-container"><img :src="myInfo.avatar" alt="" ref="avatar" /></div>           
            <div class="username-email">
                <div>{{'姓名：' + myInfo.username}}</div>
                <div>{{'邮箱：' + myInfo.email}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data(){
            return {                
                msg: '个人中心'
            }
        },
        computed: mapState([
            'myInfo'
        ]),          
        mounted(){
            // 当图片加载失败时
            this.$refs.avatar.onerror = () => {
                alert('不好意思，你的头像加载失败');
            }
        } 
    }
</script>


