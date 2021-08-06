import axios from 'axios'

export function request(config){
  const instance=axios.create({
    baseURL:'baseURl',
    timeout:8000
  })
  
  return instance(config)
  //拦截器
  // instance.interceptors.request.use(config=>{
  //   console.log(config);
  //   return config
  // },
  // err=>{
  //   console.log(err);
  // })

  /* instance.interceptors.response.use(res=>{
    console.log(res.data);
    return res
  },err=>{
    console.log(err);
  }) */
}
