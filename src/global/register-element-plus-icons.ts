import { App } from 'vue'
// 暂且引入所有 icon（后期考虑使用 unplugin-icons 插件自动按需引入：https://github.com/antfu/unplugin-icons）
// CommonJS 方式引入
// const elementPlusIconsObj = require('@element-plus/icons-vue')
// ESM 方式引入
// import * as elementPlusIconsObj from '@element-plus/icons-vue'

// export default function (app: App) {
//   // 对每个 icon 都进行全局注册
//   for (const key in elementPlusIconsObj) {
//     const icon = elementPlusIconsObj[key as keyof typeof elementPlusIconsObj]
//     app.component(icon.name, icon)
//   }
// }

// 按需引入
import {
  Cellphone,
  ChatLineRound,
  CircleClose,
  Delete,
  Edit,
  Expand,
  Fold,
  Goods,
  Monitor,
  Refresh,
  RefreshRight,
  Search,
  Setting,
  User
} from '@element-plus/icons-vue'

const icons = [
  Cellphone,
  ChatLineRound,
  CircleClose,
  Delete,
  Edit,
  Expand,
  Fold,
  Goods,
  Monitor,
  Refresh,
  RefreshRight,
  Search,
  Setting,
  User
]

export default function (app: App) {
  for (const icon of icons) {
    app.component(icon.name, icon)
  }
}
