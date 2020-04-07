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
  export default {
    name: 'Home',
    components:{
      TodayRemmond
    }
  }
</script>

<style lang="less" scoped>
  .home {
    

    

    

   

    

    

    
  }
</style>