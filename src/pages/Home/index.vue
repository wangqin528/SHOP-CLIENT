<template>
  <div class="home">
    <!-- 商品分类导航 -->
    <TypeNav/>
  

    <!--列表-->
    <ListContainer/>

    <!--今日推荐-->
   <TodayRemmond/>
    <!-- 商品排行 -->
    <Rank/>

    <!-- 猜你喜欢 -->
   <like/>

    <!--楼层-->
    <Floor v-for="floor in floors" :key="floor.id" :floor="floor"/>

   

    <!--商标-->
   <branch/>

  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import TodayRemmond from './TodayRemmond/TodayRemmond'
import Branch from './Branch/Branch'
import Floor from './Floor/Floor'
import Like from './Like/like'
import ListContainer from './ListContainer/ListContainer'
import Rank from './Rank/Rank'
  export default {
    name: 'Home',
    async mounted(){
      //触发vuex的异步action调用，从mock接口请求数据state中
      this.$store.dispatch('getBanners')
      this.$store.dispatch('getFloors')
    },
    computed:{
      ...mapState({
        floors:state=>state.home.floors
      })
    },
    components:{
      TodayRemmond, 
      ListContainer,
      Branch,
      Floor,
      Like,
      Rank
    }
  }
</script>

<style lang="less" scoped>
 
</style>