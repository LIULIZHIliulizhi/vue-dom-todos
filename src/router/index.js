/**
 * Created by 29671 on 2018/11/12.
 */
import Vue from 'vue';
//引入VueRouter
import VueRouter from 'vue-router';
import About from '../views/About.vue';
import Home from '../views/Home.vue';
import Messages from '../views/Merssages.vue';
import News from '../views/News.vue'
import MessageDetail from '../views/MessageDetail.vue'


//声明使用vue 插件
Vue.use(VueRouter);
//)创建路由器的构建函数
export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path:'/home/news',
          component:News
        },
        {
          path:'/home/message',
          component:Messages,
          children: [
            {
              path:'/home/message/detail/:id',
              component:MessageDetail
            },
          ]
        },
        {
          path:'',
          redirect:'/home/news'
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]
})
