import { Module } from 'vuex'

import { ILoginState } from './types'
import { IRootState } from '../types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {},
  actions: {
    // 账号登录
    accountLoginAction({ commit }, payload: any) {
      console.log('执行 accountLoginAction', payload)
    },
    // 手机登录
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行 phoneLoginAction', payload)
    }
  }
}

export default loginModule
