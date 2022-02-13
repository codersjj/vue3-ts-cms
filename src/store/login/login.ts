import { Module } from 'vuex'

import { accountLoginRequest } from '@/service/login/login'

import { ILoginState } from './types'
import { IRootState } from '../types'
import { IAccount } from '@/service/login/type'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    }
  },
  actions: {
    // 账号登录
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1. 实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      console.log(
        '🚀 ~ file: login.ts ~ line 24 ~ accountLoginAction ~ loginResult',
        loginResult
      )
      const { id, token } = loginResult.data
      commit('changeToken', token)
    },
    // 手机登录
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行 phoneLoginAction', payload)
    }
  }
}

export default loginModule
