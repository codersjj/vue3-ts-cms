// 每次刷新页面，都会重新加载这个 main.ts 编译后的 main.js 文件，并且代码是从上往下依次执行的

import { createApp } from 'vue'
import { globalRegistry } from './global'
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)
app.use(globalRegistry)
app.use(store)
setupStore()
app.use(router)

app.mount('#app')
