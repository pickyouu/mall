<template>
  <div class="goodList">
    
    <goods-item v-for="(item,index) in goods" :key="item.iid+index || item.item_id" :item="item"/>
  </div>
</template>
<script>
import goodsItem from './goodsItem.vue'
  export default {
    name: 'goodList',
    data () {
      return {
       count:parseInt(Math.random()*1000)
      }
    },
    props:{
       goods:{
          type:Array,
          default:function(){
            return []
          }
        }
    },
    
    components: {
      goodsItem
    }
  }
</script>
<style scoped>
  .goodList{
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
    padding-top: 10px;
  }
</style>