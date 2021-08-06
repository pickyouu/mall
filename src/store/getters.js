export default {
  cartLength(state){
    return state.cartList.length
  },
  cartLists(state){
    return state.cartList
  },
  totalPrice(state){
    let all=0
    for(let item of state.cartList){
      if(item.check){
        all+=item.price*item.count
      }
    }
    return all
  },
  totalCount(state){
    let count=0
    for(let item of state.cartList){
      if(item.check){
        count+=item.count
      }
    }
    return count
  }
}
