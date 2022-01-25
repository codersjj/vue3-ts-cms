const path = require('path')

module.exports = {
  // 配置方式一：使用 Vue CLI 提供的属性
  outputDir: './build',
  // 配置方式二：使用 configureWebpack 函数（和 webpack 中的属性完全一致，最后会进行合并）
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      components: '@/components'
    }
  }
}
