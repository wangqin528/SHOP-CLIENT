import { reqBaseCategoryList, reqBanners, reqFloors } from '@/api'

const state = {
  baseCategoryList: [], // 所有分类的数组
  banners: [], // 广告位轮播数据的数组
  floors: [], // 所有楼层数据的数组
}

const mutations = {
//接受保存列表 
  RECEIVE_CATEGORYS(state, categorys) {
    state.baseCategoryList = categorys.splice(0,categorys.length-2)
  },
  RECEIVE_BANNERS(state, banners) {
    state.banners = banners
  },
  RECEIVE_FLOORS(state, floors) {
    state.floors = floors
  }

}

const actions = {
  //异步获取首页所有分类
  async getBaseCategoryList({ commit }) {
    const result = await reqBaseCategoryList();
    if (result.code === 200) {
      const categorys=result.data
      commit('RECEIVE_CATEGORYS', categorys )
    }
  },

  //异步获取广告位轮播数据
  async getBanners({ commit }) {
    //异步请求获取数据
    const result = await reqBanners();
    //成功得到数据后，提交给mutation
    if (result.code === 200) {
      const banners=result.data
      commit('RECEIVE_BANNERS', banners)
    }
  },

  //异步获取所有楼层数据
  async getFloors({ commit }) {
    const result = await reqFloors();
    if (result.code === 200) {
      const floors=result.data
      commit('RECEIVE_FLOORS', floors)
    }
  }   
}

const getters = {

}

export default {
  state,
  actions,
  mutations,
  getters
}