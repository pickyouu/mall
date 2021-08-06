<template>
  <div id="DetailShowDetail" v-if="Object.keys(detailInfo).length!=0">
    <div v-for="item in detailInfo.detailImage[0].list" :key="item" class="DetailImg">
      <img :src="item" alt="" @load="imgLoad">
    </div>
    
  </div>
</template>
<script>
  export default {
    name: 'DetailShowDetail',
    props: {
      detailInfo:{
        type:Object,
        default:function(){
          return {}
        }
      }
    },
    methods: {
      imgLoad(){
        this.$emit('imgLoad')
      }
    }
  }
</script>
<style scoped>
  .DetailImg{
    width: 100%;
  }
  .DetailImg img{
    width: 100%;
  }
</style>