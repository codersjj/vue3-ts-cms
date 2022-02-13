const path = require('path')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // 配置方式一：使用 Vue CLI 提供的属性
  outputDir: './build',
  // 将所有的资源都链接为相对路径（但部署到服务器上时通常不会这样设置）
  // publicPath: './',
  // 配置方式三：使用 chainWebpack 函数（链式方式配置）
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
  },
  configureWebpack: {
    plugins: [
      require('unplugin-auto-import/webpack')({
        resolvers: [ElementPlusResolver()]
      }),
      require('unplugin-vue-components/webpack')({
        resolvers: [ElementPlusResolver()]
      })
    ]
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  }
}
