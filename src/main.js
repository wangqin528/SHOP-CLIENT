import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './components/TypeNav'


Vue.config.productionTip = false

// 注册全局组件
Vue.component('TypeNav', TypeNav)
new Vue({
  // el:'app',
  render:h=>h(App),//将App组件对象渲染到页面上
  router,//配置路由器，内部才能访问
}).$mount('#app')
