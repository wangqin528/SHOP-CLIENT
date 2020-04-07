<template>
  <div>
    <h2>Search</h2>
    <p>query参数：keyeord={{$route.query.keyword}}</p>
    <p>params参数：keyeord={{$route.params.keyword}}</p>
    <p>params==>props:keyeord1={{keyword1}}</p>
    <p>params==>query:keyeord2={{keyword2}}</p>
    
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'Search',
    props:['keyword1','keyword2']
  }
</script>

<style lang="less" scoped>

 
</style>
