import {
  ADD_COUNT,
  PUSH_ITEM
} from './mutation_type'
export default  {
  [ADD_COUNT](state,payload){
    payload.count+=1
  },
  [PUSH_ITEM](state,payload){
    payload.check=true
    state.cartList.push(payload)
  }
}