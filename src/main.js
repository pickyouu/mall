import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import fastclick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false
//弹窗效果
Vue.use(toast)
//解决移动端300ms问题
fastclick.attach(document.body)
//图片懒加载
Vue.use(vueLazyLoad,{
  loading:require('./assets/img/common/loading.gif')
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
