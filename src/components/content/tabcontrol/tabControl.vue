<template>
  <div class="tabControl">
    <div v-for="(item,index) in datas" :key="item" class="tabControlItem" :class="{active: index===CurrentIndex}" @click="changeIndex(index)">
      {{item}}
    </div>
  </div>
</template>
<script>
  export default {
    name: 'tabControl',
    data () {
      return {
       currentindex:0
      }
    },
    methods: {
      changeIndex(index){
        
        this.$emit('getIndex', index)
      }
    },
    props: {
      datas:{
        type:Array,
        default:function(){
          return []
        }
      },
       CurrentIndex:{
         type:Number,
         default:0
       }
    },
    
  }
</script>
<style scoped>
  .tabControl{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  }
  .tabControlItem{
    flex: 1;
    height: 100%;
  }
  .active{
    color: var(--color-tint);
    border-bottom: 2px solid var(--color-tint);
  }  
  
</style>