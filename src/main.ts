import { createApp } from 'vue'

import './service/axios_demo'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL, process.env.VUE_APP_BASE_NAME)
