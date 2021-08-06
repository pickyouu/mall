<template>
  <div id="DetailShowMsg" v-if="Object.keys(detailInfo).length!=0">
    <div class="Desc">{{detailInfo.desc}}</div>
    <div class="ComeToShow">来吧,展示</div>
  </div>
</template>
<script>
  export default {
    name: 'DetailShowMsg',
    props: {
      detailInfo:{
        type:Object,
        default: function(){
          return {}
        }
      }
    }
  }
</script>
<style scoped>
  #DetailShowMsg{
    padding: 20px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }
  .ComeToShow{
    text-align: center;
    padding-top: 8px;
  }
  .Desc{
    text-indent: 2em;
  }
</style>