<style lang="less" scoped>
    @import '../../assets/styles/base.less';

    /*登录页面的私有样式*/
    body{
        .bgcl(@f3);
    }
    h3{
        margin-top: 3rem;
        text-align: center;
        .fs(34);
    }
    .form{
        margin: 0.4rem;
        display: flex;
        flex-direction: column;
        .cell{
            &:not(:last-child){
                margin-bottom: 0.4rem;
            }
            display: flex;
            justify-content: center;
            align-items: center;
            .fs(24);
            label{
                margin-right: 0.4rem;
                width: 2rem;
                text-align: justify; 
                text-align-last: justify;
            }
            input{         
                flex: 1;                        
                height: 0.6rem;
            }
            .submit{
                width: 100%;
                line-height: 0.8rem;
                .fs(24);
            }            
        }
    }
</style>

<template>
    <div class="page-login">        
        <!-- 一个简易的登录页表单 -->
        <h3>{{msg}}</h3>
        <div class="form">
            <div class="cell"><label for="name">用户名</label><input type="text" id="name" class="name" v-model="username"></div>
            <div class="cell"><label for="passwd">密码</label><input type="text" id="passwd" class="passwd" v-model="passwd"></div>
            <div class="cell"><button class="submit" @click="reqLogin">提交</button></div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data(){
            return {                
                msg: '请先登录',
                username: '',
                passwd: ''
            }
        },
        methods: {
            // 请求登录
            reqLogin(){            
                let username = this.username,
                    passwd = this.passwd;

                if(!username || !passwd){
                    alert('用户名或密码不能为空');
                    return false;
                }else{
                    return this.$http.post('/login',{
                        username,
                        passwd
                    },{
                        headers: {'Content-Type': 'application/json; charset=UTF-8'}
                    }).then((res)=>{
                        let data = res.data.data;
                        this.$store.dispatch('commitMyInfo',data.userInfo);
                        localStorage.setItem('token',data.token);

                        this.$router.replace('/index');
                    }).catch((res) => {
                        alert('请先开启json-server');
                    });   
                }                  
            }
        }
    }
</script>


