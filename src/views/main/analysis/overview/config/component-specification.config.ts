import { IDescription } from '@/base-ui/descriptions'
export const componentSpecification: IDescription[] = [
  {
    label: '组件的文件名称',
    description: '统一小写，多个单词使用 - 分割'
  },
  {
    label: '组件的目录结构',
    description:
      '例如 table 组件：table/src/table.vue, 统一在 table/index.ts 中导出'
  },
  {
    label: '组件中导包的顺序',
    description: 'vue 技术栈的包，第三方的工具函数，本地的组件，本地的工具函数'
  },
  {
    label: '组件的名称',
    description: '统一使用帕斯卡命名法（大驼峰命名法）'
  },
  {
    label: '组件属性的顺序',
    description: 'name, components, props, emits, setup ...'
  },
  {
    label: 'template 标签',
    description: 'kebab-case，例如：<page-search />'
  },
  {
    label: 'template 元素属性顺序',
    description: 'v-if, v-for, ref, class, style, ..., 事件'
  },
  {
    label: '组件的 props',
    description: '使用驼峰命名法（小写字母开头），必须编写类型默认值'
  },
  {
    label: '组件的样式',
    description:
      '作用域：scoped, lang = scss / less; 类名：统一小写, 多个单词之间使用 - 分割'
  }
]
