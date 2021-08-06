<template>
 
  <div id="homeRecomend">
    <div v-for="item in recommends" :key="item.sort" class="homeRecomendItem">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="ImgLoad">
        <div>{{item.title}}</div>
      </a>
      
    </div>
  </div>

</template>
<script>
export default {
  name:'homerecommend',
  props: {
    recommends:{
      type:Array,
      default:function(){
        return []
      }
    }
  },
  methods: {
    ImgLoad(){
      this.$emit('RecommendImgLoad')
    }
  }
}
</script>
<style scoped>
  #homeRecomend{
    display: flex;
    width:100%;
    text-align: center;
    padding: 10px 0 20px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  }
  .homeRecomendItem{
    flex: 1;
    font-size: 14px;

  }
  .homeRecomendItem img{
    width: 65px;
    height: 65px;
    padding-bottom: 2px;
  }
</style>