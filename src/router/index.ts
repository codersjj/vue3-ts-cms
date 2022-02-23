import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import localCache from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
    // children: [
    //   {
    //     path: 'analysis',
    //     component: () => import('@/views/main/system/user/user.vue')
    //   }
    // ]
    // children: [] -> 根据 userMenus 来决定
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 全局前置守卫
router.beforeEach((to) => {
  // 不是登录页时根据本地缓存的 token 的有无判断是否需要登录
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }

  // 准备跳转的 path 为 /main 时，重定向（重新跳转）到第一个菜单对应的路径
  // http://localhost:8080/ -> http://localhost:8080/main -> http://localhost:8080/firstMenu.url
  if (to.path === '/main') {
    return firstMenu.url
  }
})

export default router
