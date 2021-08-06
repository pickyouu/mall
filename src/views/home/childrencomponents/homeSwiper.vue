<template>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.image">
        <a :href="item.link"><img :src="item.image" alt="" @load="ImgLoad"></a>
      </swiper-item>
    </swiper>  
</template>
<script>
import {Swiper,SwiperItem} from 'components/common/swiper'


export default {
  name:'homeSwiper',
  props:{
    banners:{
      type:Array,
      default:function(){
        return []
      }

    }
  },
  data () {
    return {
      count:0
    }
  },
  components: {
    SwiperItem,
    Swiper
   
  },
  methods: {
    ImgLoad(){
      this.count+=1
      if(this.count===1){
        this.$emit('SwiperImgLoad')
      }
    }
  }
}
</script>
<style scoped>

</style>