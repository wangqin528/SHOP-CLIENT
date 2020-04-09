import Vue from 'vue'
import 'swiper/css/swiper.min.css'

import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from './components/TypeNav'
import Carousel  from './components/Carousel'
import  './mock/mockServer'

Vue.config.productionTip = false

// 注册全局组件
Vue.component('TypeNav', TypeNav)//全局使用<TypeNav/>>
Vue.component('Carousel', Carousel)//<Carousel/>>
new Vue({
  // el:'app',
  render:h=>h(App),//将App组件对象渲染到页面上
  router,//配置路由器，内部才能访问
  store,//配置vuex的核心管理对象store===》组件中可以通过$store得到store对象
}).$mount('#app')
