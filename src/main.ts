import { createApp } from 'vue'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
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

// 定义一个全局的属性 $filters，$符号用来表示是全局的属性
app.config.globalProperties.$filters = {
  formatUTCTime(utcString: string) {
    return dayjs.utc(utcString).format('YYYY-MM-DD HH:mm:ss')
  }
}

app.mount('#app')
