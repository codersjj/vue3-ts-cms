const path = require('path')

module.exports = {
  // 配置方式一：使用 Vue CLI 提供的属性
  outputDir: './build',
  // 配置方式三：使用 chainWebpack 函数（链式方式配置）
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
  }
}
