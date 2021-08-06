<template>
  <div class="warpper" ref="aaa">
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import bscroll from 'better-scroll'

  export default {
    name: 'Scroll',
    props: {
      ProbeType:{
        type:Number,
        default:0
      },
      PullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    data () {
      return {
        scroll:null
      }
    },
    mounted () {
        
        this.scroll=bscroll(this.$refs.aaa,{
        observeImage:true,
        observeDOM:true,
        click:true,
        probeType:this.ProbeType,
        pullUpLoad:this.PullUpLoad
      })
        
      if(this.ProbeType==2 || this.ProbeType==3){
        this.scroll.on('scroll',position=>{
        this.$emit('GetScrollPosition',position.y)
      })
      }
      if(this.PullUpLoad==true){
       
        this.scroll.on('pullingUp',()=>{
        this.$emit('UpLoadMore')
        
      })
      }
      
    },
    methods: {
      scrollTo(x,y,time=500){
        this.scroll.scrollTo(x,y,time)
      }
    } 
  }
</script>
<style scoped>
  
</style>