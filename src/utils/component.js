import Vue from 'vue';

// 引入并注册mint-ui的组件和指令
import { Header,Tabbar,TabItem,Button,Field,Loadmore,Lazyload,Cell  } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Button.name,Button);
Vue.component(Field.name,Field);
Vue.component(Loadmore.name,Loadmore);
Vue.component(Cell.name,Cell);

Vue.use(Lazyload,{
    loading: require('assets/img/avatar.png'),
});

