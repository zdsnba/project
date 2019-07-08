<template>
  <div>
  
      <tagbar></tagbar>
      <router-view></router-view>
  </div>
</template>

<script>
import tagbar from '@/components/tagbar'
  export default {
    components:{
      tagbar
    }
  }
</script>

<style lang="scss">
        *{
    margin:0;
    padding:0
  }
  html{
    height: 100%
   
  }
  li{
      list-style: none;
    }
</style>