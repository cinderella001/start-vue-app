<style lang="less" scoped>
    @import '../../assets/styles/base.less';
    
    /*活动列表的私有样式*/
    h3{
        text-align: center;
        .fs(34);
    }    
    .container{
        border-top: 0.1rem solid @red;
        height: 10rem;
        position: relative;
        ul{
            margin: 0;
            li{
                border-bottom: 1px solid @3;
                .fs(14);
            }
        }        
    }
</style>

<template>
    <div class="page-acty">       
        <!-- 一个简易的活动列表 -->
        <h3>{{msg}}</h3>
        <div class="container">
            <scroller ref="myscroller"
                :on-refresh="refresh"
                :on-infinite="infinite"
            >
                <ul>
                    <li v-for="(item,index) in lists" :key="index">
                        <p>{{item.city}}</p>
                        <p>{{item.county}}</p>
                        <p>{{item.desc}}</p>
                    </li>
                </ul>
            </scroller>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data(){
            return {                
                msg: '活动列表',
                lists: [],
                page: -1,
                shouldLoadMore: true
            }
        },
        methods: {
            // 请求获取活动列表
            reqActy(page){
                return this.$http.post('/acty',{
                    page: page
                }).then((res) => {
                    this.page = page; // 更新页数

                    let data = res.data.data;
                    if(page == 0){
                        this.lists = data;
                    }else{                  
                        if(page == 2) data = []; // 假设总共只有3页   
                        if(data.length) this.lists = this.lists.concat(data);        
                    }
                    return data; // 一定要有返回值，否则调用infinite方法的时候会出错
                });
            },

            // 下拉刷新
            refresh(done){
                console.log('refresh');
                this.reqActy(0).then(() => {
                    done();
                });
            },       

            // 上拉加载
            infinite(done){
                console.log('infinite');

                // 当上拉加载到没有更多数据的时候，如果先下拉一段距离，再重新上拉到底，仍会继续调用infinite方法从而发出不必要的分页请求，所以需要在这里手动添加一个开关，当开关为true的时候才会执行后面的请求代码   
                if(!this.shouldLoadMore){
                    done(true); 
                }else{
                    this.reqActy(this.page+1).then((data) => {
                        if(data.length == 0){
                            done(true);
                            this.shouldLoadMore = false;  // 手动关闭上拉加载的请求开关
                        }else{
                            done();
                        }
                    });                     
                }
            }                 
        }  
    }
</script>


