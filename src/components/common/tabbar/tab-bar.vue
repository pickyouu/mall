<template>
  <div id="tabbar" class="ignore tabbar">
    <slot>
      
    </slot>
  </div>
</template>
<script>
export default {
  name:'TabBar',

}
</script>
<style scoped>
  #tabbar{
  background-color: #f6f6f6;
  height: 49px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  box-shadow: 0px -1px 2px rgba(173, 196, 204,0.1);
  font-size: 12px;
  }
  
</style>