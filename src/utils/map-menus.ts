import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1. 先去加载默认所有的 routes
  const allRoutes: RouteRecordRaw[] = []
  // Webpack 环境下动态地加载文件
  // （1）查找文件
  // require.context() 这个函数是 Webpack 提供的（https://webpack.js.org/guides/dependency-management/#requirecontext），可以用来创建上下文，我们可以通过调用它返回的请求上下文函数对象中的 keys() 方法拿到目标文件夹中的所有目标文件
  const requireContext = require.context('@/router/main', true, /\.tsx?$/)
  // console.log(requireContext.keys())
  // [
  //   "./analysis/dashboard/dashboard.ts",
  //   "./analysis/overview/overview.ts",
  //   "./product/category/category.ts",
  //   "./product/goods/goods.ts",
  //   "./story/chat/chat.ts",
  //   "./story/list/list.ts",
  //   "./system/department/department.ts",
  //   "./system/menu/menu.ts",
  //   "./system/role/role.ts",
  //   "./system/user/user.ts"
  // ]
  requireContext.keys().forEach((key) => {
    // （2）使用 CommonJS 中的 require() 函数拿到文件模块对象
    // 注：这里不建议通过 require('path') 拿到 path 模块后使用 path.resolve() 获取文件的绝对路径，因为这里用到 node 模块可能会有些问题
    const route = require('@/router/main' + key.substring(1))
    // 也可以通过 split('.')[1] 拿到不带 .ts 后缀的文件路径，require() 也可以正常解析
    // const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  console.log(allRoutes)

  // 2. 根据菜单获取需要添加的 routes

  return routes
}
