<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-icon-active"></slot></div>
    <div v-else> <slot name="item-icon"></slot></div>   
    <div :style="activeC"><slot name="item-text"></slot></div>
  </div>
     
</template>
<script>
export default {
  name:'TabBarItem',
  data () {
    return {
      //isActive:true

    }
  },
  props: {
    path:{
      type:String
    },
    activeColor:{
      type:String,
      default:'#d4237a'
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeC(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)//.catch(err=>(''))
    }
  }
}
</script>
<style scoped>
  .tabbar-item{
  flex: 1;
  text-align: center;
  
  }
  .tabbar-item img{
    width: 24px;height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  
</style>