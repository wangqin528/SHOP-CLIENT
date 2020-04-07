//路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// 修正vue原型上的push和replace方法
const orginPush=VueRouter.prototype.push
//通过成功回调的参数指定一个默认的函数
VueRouter.prototype.push=function(location,onComplete=()=>{},onAbort){
   return orginPush.call(this,location,onComplete,onAbort)
}
//通过失败回调的参数指定一个默认的函数
// VueRouter.prototype.replace=function(location,onComplete,onAbort=()=>{}){
//    return orginPush.call(this,ocation,onComplete,onAbort)
// }

// VueRouter.prototype.replace=function(location,onComplete,onAbort){
//     return orginPush.call(this,ocation,onComplete,onAbort).catch(()=>{})
//  }
//声明使用vue的插件
Vue.use(VueRouter)
//向外暴露一个路由器对象
export default new VueRouter({
    //mode:'hash',//路由路径带#号
    mode:'history',//路径就不带#号了
    //配置应用中的所有路由
    routes
})
