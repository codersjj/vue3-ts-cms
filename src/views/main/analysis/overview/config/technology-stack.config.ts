import { ITextLink } from '@/base-ui/link-list'

export const technologyStack: ITextLink[] = [
  {
    label: '开发工具',
    text: 'Visual Studio Code',
    href: 'https://code.visualstudio.com/'
  },
  {
    label: '编程语言',
    textAndHrefArr: [
      { text: 'TypeScript 4.x', href: 'https://www.typescriptlang.org/' },
      { text: 'JavaScript' }
    ]
  },
  {
    label: '构建工具',
    text: 'Webpack',
    href: 'https://webpack.js.org/'
  },
  {
    label: '前端框架',
    text: 'Vue 3.x',
    href: 'https://vuejs.org/'
  },
  {
    label: '路由工具',
    text: 'Vue Router 4.x',
    href: 'https://router.vuejs.org/'
  },
  {
    label: '状态管理',
    text: 'Vuex 4.x',
    href: 'https://vuex.vuejs.org/'
  },
  {
    label: 'UI 框架',
    text: 'Element Plus 2.x',
    href: 'https://element-plus.org/'
  },
  {
    label: '可视化',
    text: 'ECharts 5',
    href: 'https://echarts.apache.org/'
  },
  {
    label: '工具库',
    text: 'Day.js',
    href: 'https://day.js.org/'
  },
  {
    label: 'CSS 预编译',
    text: 'Less',
    href: 'https://lesscss.org/'
  },
  {
    label: 'HTTP 工具',
    text: 'Axios',
    href: 'https://axios-http.com/'
  },
  {
    label: 'Git hooks 工具',
    text: 'husky',
    href: 'https://typicode.github.io/husky'
  },
  {
    label: '代码规范',
    textAndHrefArr: [
      { text: 'EditorConfig', href: 'https://editorconfig.org/' },
      { text: 'Prettier', href: 'https://prettier.io/' },
      { text: 'ESLint', href: 'https://eslint.org/' }
    ]
  },
  {
    label: '提交规范',
    textAndHrefArr: [
      { text: 'Commitizen', href: 'http://commitizen.github.io/cz-cli/' },
      { text: 'commitlint', href: 'https://commitlint.js.org/' }
    ]
  },
  {
    label: '自动部署',
    textAndHrefArr: [
      { text: 'Linux' },
      { text: 'Nginx', href: 'http://nginx.org/' },
      { text: 'Jenkins', href: 'https://www.jenkins.io/' }
    ]
  }
]
