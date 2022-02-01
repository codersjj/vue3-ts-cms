import { createApp } from 'vue'

import {
  ElButton,
  ElAlert,
  ElAside,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio
} from 'element-plus'

const components = [
  ElButton,
  ElAlert,
  ElAside,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio
]

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)

// 全局注册 ElButton 等组件
for (const component of components) {
  app.component(component.name, component)
}

app.use(router)
app.use(store)
app.mount('#app')
