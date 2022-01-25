module.exports = {
  // 配置方式一：使用 Vue CLI 提供的属性
  outputDir: './build',
  // 配置方式二：使用 configureWebpack 对象（和 webpack 中的属性完全一致，最后会进行合并）
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
}
