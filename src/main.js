import Vue from 'vue';
import App from './App.vue';
// 注册路由器
import router from './router';
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router// 创建vue配置路由器
})
