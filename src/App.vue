<template>
<div class="App">
  <Header/>


  <router-view></router-view>
  <Footer/> 

</div>
</template>

<script type="text/ecmascript-6">
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
  export default {
    name:'App',
    components:{
      Header,
      Footer,
    }
  }
</script>

<style lang="less" scoped>

 
</style>

