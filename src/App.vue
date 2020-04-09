<template>
<div class="App">
  <Header/>


  <router-view></router-view>
  <Footer v-if="!$route.meta.isHideFooter"/> 

</div>
</template>

<script type="text/ecmascript-6">
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// import {reqBaseCategoryList} from '@/api'
  export default {
    name:'App',
    async mounted(){
    //  const results=await reqBaseCategoryList()
     
            //触发vuex中的getBaseCategoryList请求 actions调用
            this.$store.dispatch('getBaseCategoryList')
    },
    components:{
      Header,
      Footer,
    }
  }
</script>

<style lang="less" scoped>

 
</style>

