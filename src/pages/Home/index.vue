<template>
  <div class="home">
    <!-- 商品分类导航 -->
    <TyprNav/>>
  

    <!--列表-->
    <ListContainer/>

    <!--今日推荐-->
   <TodayRecommend/>
    <!-- 商品排行 -->
    <Rank/>

    <!-- 猜你喜欢 -->
   <like/>

    <!--楼层-->
    <Floor/>

    <!--楼层-->
   <Floor/>

    <!--商标-->
   <branch/>

  </div>
</template>

<script type="text/ecmascript-6">
import TodayRemmond from './TodayRemmond/TodayRemmond'
import ListContainer from './ListContainer/ListContainer'
import Branch from './Branch/Branch'
import Floor from './Floor/Floor'
import Like from './Like/like'
import Rank from './Rank/Rank'
  export default {
    name: 'Home',
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
  .home {
    

    

    

   

    

    

    
  }
</style>