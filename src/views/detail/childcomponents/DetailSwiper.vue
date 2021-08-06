<template>
  <swiper class="DetailSwiper">
    <swiper-item v-for="item in SwiperImg" :key="item"><img :src="item" alt=""></swiper-item>
  </swiper>
</template>
<script>
  import{Swiper,SwiperItem} from 'components/common/swiper'
  export default {
    name: 'DetailSwiper',
    props: {
      SwiperImg:{
        type:Array,
        default:function(){
          return []
        }
      }
    },
    components: {
      SwiperItem,
      Swiper
    }
  }
</script>
<style scoped>
  .DetailSwiper{
    /* width: 100vw; */
    height: 300px;
    overflow: hidden;
  }
  
</style>