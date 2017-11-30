<style lang="less" scoped>
    @import '../../assets/styles/base.less';
    
    /*活动列表的私有样式*/
    h3{
        text-align: center;
        .fs(34);
    }    
    ul{
        margin-bottom: 2rem;
        li{
            border-top: 1px solid @3;
            &:last-child{
                border-bottom: 1px solid @3;
            }
            .fs(14);
        }
    }
</style>

<template>
    <div class="page-acty">       
        <!-- 一个简易的活动列表 -->
        <h3>{{msg}}</h3>
        <ul>
            <li v-for="(item,index) in lists" :key="index">
                <p>{{item.city}}</p>
                <p>{{item.county}}</p>
                <p>{{item.desc}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data(){
            return {                
                msg: '活动列表',
                lists: []
            }
        },
        methods: {
            // 请求获取活动列表
            reqActy(){
                return this.$http.post('/acty').then((res) => {
                    this.lists = res.data.data;
                })
            }
        },
        created(){
            this.reqActy();
        }   
    }
</script>


