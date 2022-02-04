// 2. 方式二：根据 process.env.NODE_ENV 的值来自动切换
// process.env.NODE_ENV 变量的值会通过 Webpack 的 DefinePlugin 插件静态地嵌入到客户端侧的代码中。
// process.env.NODE_ENV 在不同环境下会是不同的值：
// 开发环境：development
// 生产环境：production
// 测试环境：test

let BASE_URL = ''
let VUE_APP_NAME = ''

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://coderzhj.org/dev'
  VUE_APP_NAME = 'coderzhj'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderzhj.org/prod'
  VUE_APP_NAME = 'coderwy'
} else {
  BASE_URL = 'http://coderzhj.org/test'
  VUE_APP_NAME = 'coderzgq'
}

export { BASE_URL, VUE_APP_NAME }
