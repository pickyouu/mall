import Toast from 'components/common/toast/toast.vue'
const obj={}

obj.install=function(vue){
 
  const toastConstructor=vue.extend(Toast)
  const toast=new toastConstructor()
  vue.prototype.$toast=toast
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)
  
}
export default obj