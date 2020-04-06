//路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
//声明使用vue的插件
Vue.use(VueRouter)
//向外暴露一个路由器对象
export default new VueRouter({
    //mode:'hash',//路由路径带#号
    mode:'history',//路径就不带#号了
    //配置应用中的所有路由
    routes
})
