import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)
app.use(router)
app.use(store)

// 每次重新运行代码都会来调用 setupStore()
setupStore()

app.mount('#app')
