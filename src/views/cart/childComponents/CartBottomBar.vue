<template>
  <div class="CartBottomBar">
    <div class="allChoose">
        <check-button class="checkButton" :check="false" :class="{active:isSellectAll}" @click.native="checkClick"/>
        <div>全选</div>
    </div>
    <div class="allPrice">
      <span>合计:￥{{totalPrice}}</span>
    </div>
    <div class="allBuy" @click="calcClick">
      <div>去结算({{totalCount}})</div>
    </div>
  </div>
</template>
<script>
  import CheckButton from 'components/content/checkbutton/CheckButton.vue' 
  import {mapGetters} from 'vuex'
  export default {
    name: 'CartBottomBar',
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['totalPrice','totalCount']),
      isSellectAll(){
        if(this.$store.state.cartList.length==0){
          return false
        }else{
          return !(this.$store.state.cartList.filter(item=> !item.check).length)
        }
      }
    },
    methods: {
      checkClick(){
        if(this.$store.state.cartList.length==0){

        }else if(this.isSellectAll){
          this.$store.state.cartList.forEach((item)=>{
            item.check=false
          })
        }else{
          this.$store.state.cartList.forEach((item)=>{
            item.check=true
          })
        }
      },
      calcClick(){
        if(this.$store.state.cartList.filter(item=> item.check).length==0){
          this.$toast.show('请选择商品')
        }
      }
    }
  }
</script>
<style scoped>
  .CartBottomBar{
    font-size: 14px;
    height: 40px;
    position: absolute;
    bottom: 49px;
    left: 0;
    right: 0;
    background-color: rgb(243, 240, 240);
    display: flex;
    line-height: 40px;
  }
  .allChoose{
    display: flex;
    width: 24%;

  }
  .checkButton{
    margin: 10px 5px 0;
  }
  .allPrice{
    width: 50%;
  }
  .allBuy{
    width: 26%;
    background-color: rgb(228, 80, 92);
    padding-left: 10px;
    border-radius: 20%;
    color: white;
  }
  .active{
    background-color: var(--color-tint);
  }
</style>