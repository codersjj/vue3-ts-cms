import { App } from 'vue'
// import registerElementPlus from './register-element-plus'
import registerElementPlusIcons from './register-element-plus-icons'
import registerProperties from './register-properties'

export function globalRegistry(app: App): void {
  // 注册 ElementPlus 中的组件
  // registerElementPlus(app)
  // 也可以使用 app.use() 方法以插件的形式进行注册
  // app.use(registerElementPlus)

  // 注册其它东西
  // 注册 element-plus 中的 icon 图标
  app.use(registerElementPlusIcons)
  // 注册全局属性
  app.use(registerProperties)
}
