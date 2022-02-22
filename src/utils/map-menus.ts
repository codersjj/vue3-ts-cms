import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null

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

  // 2. 根据菜单获取需要添加的 routes
  // 从 userMenus 中拿到菜单信息后，判断里面的 type 是否等于 2，如果等于 2，就进行添加，否则，就应该递归查询 children 中 type 等于 2 的菜单，再进行路由添加
  // type === 1 -> children -> 继续往下判断 type
  // type === 2 -> url -> route
  // 在函数内部封装一个递归函数
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      // type 为 2 的菜单才是本项目中用户点击之后需要进行路由映射的菜单
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

export function mapPathToMenu(userMenus: any[], path: string): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      // menu.children 没有值时传空数组，防止递归时遍历 userMenus 时变成遍历 undefined
      const findMenu = mapPathToMenu(menu.children ?? [], path)
      if (findMenu) {
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === path) {
      return menu
    }
  }
}

export { firstMenu }
