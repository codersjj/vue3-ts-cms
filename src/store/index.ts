import { createStore } from 'vuex'

import login from './login/login'

import { IRootState } from './types'

// 建议传入类型（如这里的 IRootState）以便给 state 指定类型
const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'coderzhj',
      age: 20,
      height: '1.88'
    }
  },
  mutations: {
    changeName(state) {
      console.log(state)
    }
  },
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export default store
