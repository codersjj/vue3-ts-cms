import { createStore, Store, useStore as useVuexStore } from 'vuex'

import login from './login/login'
import system from './main/system/system'
import product from './main/product/product'

import { IRootState, IStoreType } from './types'

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
    login,
    system,
    product
  }
})

// 对 store 中的一些内容进行初始化
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

// 封装一个 useStore() 函数，内部还是调用的 Vuex 的 useStore() 函数，只不过封装后返回的 Store 类型中的类型是我们自定义的一个交叉类型
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
