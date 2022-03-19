import { createStore, Store, useStore as useVuexStore } from 'vuex'

import login from './login/login'
import system from './main/system/system'
import product from './main/product/product'
import dashboard from './main/analysis/dashboard/dashboard'

import { getPageListData } from '@/service/main/system/system'

import { IRootState, IStoreType } from './types'

// 建议传入类型（如这里的 IRootState）以便给 state 指定类型
const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'coderzhj',
      age: 20,
      height: '1.88',
      allDepartments: [],
      allRoles: [],
      allMenus: []
    }
  },
  mutations: {
    changeName(state) {
      console.log(state)
    },
    changeAllDepartments(state, list) {
      state.allDepartments = list
    },
    changeAllRoles(state, list) {
      state.allRoles = list
    },
    changeAllMenus(state, list) {
      state.allMenus = list
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      // 请求部门数据并保存到 Vuex 中
      const departmentsRes = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentsRes.data
      commit('changeAllDepartments', departmentList)

      // 请求角色数据并保存到 Vuex 中
      const rolesRes = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = rolesRes.data
      commit('changeAllRoles', roleList)

      // 请求完整菜单数据并保存到 Vuex 中
      const menusRes = await getPageListData('/menu/list', {})
      const { list: menuList } = menusRes.data
      commit('changeAllMenus', menuList)
    }
  },
  modules: {
    login,
    system,
    product,
    dashboard
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
