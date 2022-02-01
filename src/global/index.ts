import { App } from 'vue'
import registerElementPlus from './register-element-plus'

export function registerApp(app: App): void {
  // 注册 ElementPlus 中的组件
  registerElementPlus(app)

  // 注册其它东西
}
