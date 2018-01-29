<style lang="less" scoped>
    @import '../../assets/styles/base.less';

    /*登录*/
    h3{
        margin-top: 3rem;
        text-align: center;
        .fs(34);
    }
    
    .form{
        margin: 0.4rem;
          
        .mint-cell{
            margin: 0.2rem 0;
            .bor1;
        }

        .mint-button{
            display: block;
            width: 100%;
        }
    }
</style>

<template>
    <div class="page-login">        
        <!-- 一个简易的登录表单 -->
        <h3>请先登录</h3>
        <div class="form">
            <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="passwd"></mt-field>      
            <mt-button type="primary" @click="reqLogin">提交</mt-button>      
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { Toast } from 'mint-ui';

    export default {
        data(){
            return {                
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
                    Toast({
                        message: '用户名或密码不能为空',
                        duration: 2000
                    });
                    return false;
                }else{
                    return this.$http.post('/login',{
                        username,
                        passwd
                    }).then((res)=>{
                        let data = res.data.data;
                        this.$store.dispatch('commitMyInfo',data.userInfo);
                        localStorage.setItem('token',data.token);

                        this.$router.replace('/index');
                    }).catch((res) => {
                        Toast({
                            message: '请先开启json-server',
                            duration: 2000
                        });                        
                    });   
                }                  
            }
        }
    }
</script>


