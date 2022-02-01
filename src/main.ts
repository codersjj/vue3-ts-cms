import { createApp } from 'vue'

import { ElButton } from 'element-plus'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)

// 全局注册 ElButton 组件
app.component(ElButton.name, ElButton)

app.use(router)
app.use(store)
app.mount('#app')
