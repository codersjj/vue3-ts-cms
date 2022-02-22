import { Module } from 'vuex'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import localCache from '@/utils/cache'
import { mapMenusToRoutes } from '@/utils/map-menus'
import router from '@/router'

import { ILoginState } from './types'
import { IRootState } from '../types'
import { IAccount } from '@/service/login/type'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      // 保存 userMenus 数据，数据来源：服务器（用户第一次登录时）或者本地的 localStorage
      state.userMenus = userMenus

      console.log('注册动态路由')
      // 1. 将拿到的 userMenus 数据映射到 routes 中
      const routes = mapMenusToRoutes(userMenus)

      // 2. 将 routes 数据添加到 router.main.children 中
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    // 账号登录
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1. 实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      // 缓存 token 信息
      localCache.setCache('token', token)

      // 2. 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      // 缓存用户信息
      localCache.setCache('userInfo', userInfo)

      // 3. 请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      // 缓存用户菜单
      localCache.setCache('userMenus', userMenus)

      // 4. 跳转到首页
      router.push('/main')
    },
    // 手机登录
    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('执行 phoneLoginAction', payload)
    // },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
