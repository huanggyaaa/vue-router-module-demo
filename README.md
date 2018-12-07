# vue-router-module-demo
路由模块化开发
### 通过 vue-cli 脚手架构建项目
    vue init webpack-simple demo 
### 安装依赖
    cnpm install
### 安装路由
    cnpm install vue-loader -S
### 创建路由相关的组件
    * 主页组件 ./components/router/Home.vue
    * 新闻组件 ./components/router/News.vue
### 创建路由配置文件
    * 方便扩展与维护
    * 以后路由要添加/删除/修改等直接操作这个配置文件
### 入口文件 ./src/main.js 在 vue 实例中注册路由
### 根组件 ./src/App.vue 使用路由并监听路由变化
