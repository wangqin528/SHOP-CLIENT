//vuex最核心的管理对象
import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import modules from './modules'
Vue.use(Vuex)
  
export default new Vuex.Store({
  
    mutations,
    actions,
    getters,
    modules
})