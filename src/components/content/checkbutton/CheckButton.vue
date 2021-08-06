<template>
  <div class="CheckButton">
    <img src="~assets/img/common/gougou.svg" alt="" :class="{active:check}">
  </div>
</template>
<script>
  export default {
    name: 'CheckButton',
    props: {
      check:{
        type:Boolean,
        default:true
      }
    },
    data () {
      return {
        isActive:false  
      }
    }
  }
</script>
<style scoped>
  .CheckButton{
    display: flex;
    width: 20px;
    height: 20px;
    border: rgba(51, 50, 50, 0.1) 1px solid;
    border-radius: 50%;
    justify-content: center;
    
  }
  .CheckButton img{
    margin-top: -1px;
    margin-left: -1px;
    width: 100%;
    height: 100%;
    /* background-color: red; */
    border-radius: 50%;
    
  }
  .active{
    background-color: var(--color-tint);
  }
</style>