import { createApp } from 'vue'

import './service/axios_demo'
import { BASE_URL, VUE_APP_NAME } from './service/request/config'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

console.log(BASE_URL, VUE_APP_NAME)
