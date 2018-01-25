<style lang="less" scoped>
    @import '../../assets/styles/base.less';
    
    /*活动列表*/
    .container{
        overflow: scroll;
        padding-bottom: 1rem;
        .bs;

        ul{
            li{
                border-bottom: 1px solid @3;
                line-height: 1.5;
                padding: 0 0.4rem;
                .fs(14);
            }
        }        

        .mint-loadmore{
            /deep/.mint-loadmore-text{
                .fs(18);
            }    
        }
    }
</style>

<template>
    <div class="page-acty">       
        <!-- 活动列表 -->
        <mt-header :title="title"></mt-header>
        <div class="container" :style="{height: containerHeight}" ref="container">
            <mt-loadmore ref="loadmore"
                :auto-fill="false"
                :top-method="refresh" 
                :bottom-method="loadMore" 
                :bottom-all-loaded="allLoaded" 
            >
                <ul>
                    <li v-for="(item,index) in lists" :key="index">
                        <p>{{item.city}}</p>
                        <p>{{item.county}}</p>
                        <p>{{item.desc}}</p>
                    </li>
                </ul>
            </mt-loadmore>            
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        data(){
            return {                
                title: '活动列表',
                lists: [],
                page: 0,
                allLoaded: false,
                containerHeight: 0
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
                    return data;
                });
            },
           
            // 下拉刷新
            refresh(){
                this.reqActy(0).then(() => {
                    this.$refs.loadmore.onTopLoaded();
                    this.allLoaded = false;
                });
            },

            // 上拉加载更多
            loadMore(){
                this.reqActy(this.page+1).then((data) => {
                    if(!data.length){
                        this.allLoaded = true;
                    }
                    this.$refs.loadmore.onBottomLoaded();
                });
            }
        },
        created(){
            this.refresh();
        },
        updated(){
            // 初始化loadMore组件的高度
            if(!this.containerHeight) this.containerHeight = document.documentElement.clientHeight - this.$refs.container.getBoundingClientRect().top + 'px';            
        }
    }
</script>


