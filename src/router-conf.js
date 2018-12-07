/**
 * 路由配置文件, 单独创建一个文件, 方便以后添加路由后管理
 */

 // 导入路由相关的组件
 import Home from './components/router/Home.vue'
 import News from './components/router/News.vue'

 // 配置路由, 建立组件和路由的关系
export default {
    routes: [
        {path: '/home', component: Home},
        {path: '/news', component: News}
    ],
    // 指定活动链接 class 名
    linkActiveClass: 'active'
}