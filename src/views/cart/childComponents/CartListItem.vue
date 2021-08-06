<template>
  <div class="CartListItem">
    <div class="checkbutton">
      <check-button :check="product.check" @click.native="checkClick"/>
    </div>
    <div class="img">
      <img :src="product.img" alt="">
    </div>
    <div class="content">
      <h2>{{product.title}}</h2>
      <p>{{product.desc}}</p>
      <div class="price">{{"￥"+product.price}}</div>
      <div class="count">{{'x'+product.count}}</div>
    </div>
  </div>
</template>
<script>
  import CheckButton from 'components/content/checkbutton/CheckButton.vue'
  export default {
    name: 'CartListItem',
    components: {
      CheckButton
    },
    props: {
      product:{
        type:Object,
        default:function(){
          return {}
        }
      }
    },
    methods: {
      checkClick(){
        this.product.check=!this.product.check
      }
    }
  }
</script>
<style scoped>
  .CartListItem{
    display: flex;
    padding: 5px;
    box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1);
    
  }
  .img{
    width: 20%;
  }
  .img img{
    width: 100%;
    border-radius: 10px;
  }
  .content>h2{
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    padding-bottom: 5px;
  }
  .content{
    position: relative;
    flex: 1;
    width: 60%;
    line-height: 18px;
    padding-left: 10px;
    padding-top: 4px;
  }

  .content>p{
    font-size:14px;
     white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
  }
  
  .price{
    color: var(--color-tint);
    position: absolute;
    left: 10px;
    bottom: 5px;
  }
  .count{
    position: absolute;
    right: 5px;
    bottom: 5px;
  }
  .checkbutton{
    padding-right:5px;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center;     /* 垂直居中 */
  }
</style>