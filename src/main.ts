import { createApp } from 'vue'

// import './service/axios_demo'
import jjRequest from './service'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL, process.env.VUE_APP_BASE_NAME)

// jjRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的 config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的 response')
//       return res
//     }
//   }
// })

jjRequest.request({
  url: '/home/multidata',
  method: 'GET'
})
