import { App } from 'vue'
import registerElementPlus from './register-element-plus'

export function globalRegistry(app: App): void {
  // 注册 ElementPlus 中的组件
  // registerElementPlus(app)
  // 也可以使用 app.use() 方法以插件的形式进行注册
  app.use(registerElementPlus)

  // 注册其它东西
}
