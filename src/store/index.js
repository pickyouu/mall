import Vue from 'vue'
import vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
//安装vuex
Vue.use(vuex)


const state ={
  cartList:[]
}
//使用
const store=new vuex.Store({
  state,
  mutations,
  actions,
  getters
})
//导出
export default store