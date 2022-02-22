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
// app.use(router) 安装路由时会执行 router 中的 install() 函数，这个 install() 函数内部会获取当前浏览器地址栏中的 path，然后就会拿这个 path 去匹配 router.routes 中的路由，而此时，router.routes 中还没有我们动态添加的路由。
// 因此，如果我们在 app.use(router) 之后再往 routes 中动态添加路由（setupStore() 中的 router.addRoute() 那步），那么在 app.use(router) 时，拿 path 匹配到的路由就是 notFound 了。这时，就已经匹配好了 notFound，但还没有去回调路由守卫函数，等到下面执行完 setupStore()，注册完了动态路由，就会来执行路由守卫这个回调函数了，这时，router.getRoutes() 是能拿到所有路由的（包括前面已经动态注册过了的路由），但是，在进行路由跳转时，因为 to 中的 path 之前就已经匹配好了（匹配到的 notFound），所以最终还是会跳转到 notFound。
// app.use(router)
app.use(store)

// 每次重新运行代码都会来调用 setupStore()
setupStore()
// 在 setupStore() 中完成动态路由的注册后，再来 app.use(router)，到时候进行路由匹配就不会有问题了（path：/user -> user）
app.use(router)

app.mount('#app')
