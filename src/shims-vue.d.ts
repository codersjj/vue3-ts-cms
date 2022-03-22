/* eslint-disable */
// .vue 文件类型的声明
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'hy-event-store'
declare module '*.json'

declare let $store: any
declare let $filters: any
