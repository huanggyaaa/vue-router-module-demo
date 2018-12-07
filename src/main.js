import Vue from 'vue'
import App from './App.vue'

// 导入路由依赖
import VueRouter from 'vue-router'

// 导入路由配置
import routerConf from './router-conf.js'

// 加载路由
Vue.use(VueRouter);

// 创建路由实例
const router = new VueRouter(routerConf);

new Vue({
  el: '#app',
  render: h => h(App),

  // 注册路由, 等价于 router: router
  router 

})
