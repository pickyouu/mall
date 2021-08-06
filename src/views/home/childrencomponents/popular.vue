<template>
  <div id="homePopular">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="~assets/img/home/recommend_bg.jpg" alt="" @load="ImgLoad">
    </a>
  </div>
</template>
<script>
  export default {
    name: 'popular',
    methods: {
      ImgLoad(){
        this.$emit('PopularImgLoad')
      }
    }
  }
</script>
<style scoped>
  #homePopular img{
    width: 100%;
  }
</style>