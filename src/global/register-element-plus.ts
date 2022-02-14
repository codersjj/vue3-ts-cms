import { App } from 'vue'
// 如果没有安装 unplugin-vue-components 和 unplugin-auto-import 这两款插件开启 element-plus 的按需自动导入功能，那么需要在这里按需手动导入使用到的 element-plus 组件
import {
  ElAside,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElInput,
  ElLink,
  ElMain,
  ElTabPane,
  ElTabs
} from 'element-plus'

const components = [
  ElAside,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElInput,
  ElLink,
  ElMain,
  ElTabPane,
  ElTabs
]
export default function (app: App): void {
  // 全局注册 ElButton 等组件
  for (const component of components) {
    app.component(component.name, component)
  }
}
