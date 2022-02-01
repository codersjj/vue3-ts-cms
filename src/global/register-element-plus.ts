import { App } from 'vue'
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
export default function (app: App): void {
  // 全局注册 ElButton 等组件
  for (const component of components) {
    app.component(component.name, component)
  }
}
