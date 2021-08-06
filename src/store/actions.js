import {
  ADD_COUNT,
  PUSH_ITEM
} from './mutation_type'
export default  {
  addToCart(context,payload){
    return new Promise((resolve,reject)=>{
      let tmpItem=null
      for(let item of context.state.cartList){
        if(item.iid==payload.iid){
          tmpItem=item
          context.commit(ADD_COUNT,tmpItem)
          resolve('添加购物车成功')
          break
        }
      }
      if(!tmpItem){
        context.commit(PUSH_ITEM,payload)
        resolve('添加购物车成功')
      }
      })
  }
}