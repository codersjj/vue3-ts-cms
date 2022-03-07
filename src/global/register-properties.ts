import { App } from 'vue'
import { formatUTCTime, formatTimestamp } from '@/utils/date-format'
import { capitalize } from '@/utils/string-format'

export default function registerProperties(app: App) {
  // 定义一个全局的属性 $filters，$符号用来表示是全局的属性
  app.config.globalProperties.$filters = {
    formatUTCTime,
    formatTimestamp,
    capitalize
  }
}
