// 2. 方式二：根据 process.env.NODE_ENV 的值来自动切换
// process.env.NODE_ENV 变量的值会通过 Webpack 的 DefinePlugin 插件静态地嵌入到客户端侧的代码中。
// process.env.NODE_ENV 在不同环境下会是不同的值：
// 开发环境：development
// 生产环境：production
// 测试环境：test

let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://152.136.185.210:5000'
} else {
  BASE_URL = 'http://coderzhj.org/test'
}

export { BASE_URL, TIME_OUT }
