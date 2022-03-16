import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { ISystemState } from './types'
import {
  getPageListData,
  deletePageDataItem,
  createPageDataItem,
  editPageDataItem
} from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
        // switch (pageName) {
        //   case 'users':
        //     return state.usersList
        //   case 'role':
        //     return state.roleList
        // }
      }
    },
    pageListDataCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  mutations: {
    changeUsersList(state, usersList: any[]) {
      state.usersList = usersList
    },
    changeUsersCount(state, usersCount: number) {
      state.usersCount = usersCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
    }
  },
  actions: {
    // 获取用户、角色、部门、菜单的数据
    async getPageListAction({ commit }, payload: any) {
      // 1. 获取 pageUrl
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      // switch (pageName) {
      //   case 'users':
      //     pageUrl = '/users/list'
      //     break
      //   case 'role':
      //     pageUrl = '/role/list'
      //     break
      // }

      // 2. 发送网络请求
      const pageListData = await getPageListData(pageUrl, payload.queryInfo)
      console.log(
        '🚀 ~ file: system.ts ~ line 73 ~ getPageListAction ~ pageListData',
        pageListData
      )

      // 3. 将数据存储到 state 中
      const { list, totalCount } = pageListData.data
      // 数据量不为 0 时如果返回数据列表为空，则直接跳出函数（解决分页器在改变当前页和每页条数时可能发生的发送两次网络请求时最后拿到的数据列表为空的 bug，如共有 9 条数据，每页显示 5 条，当前页为 2 时，点击切换为每页显示 10 条，就有可能导致请求不到列表数据）
      if (totalCount && !list.length) {
        return
      }
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
      // switch (pageName) {
      //   case 'users':
      //     commit('changeUsersList', list)
      //     commit('changeUsersCount', totalCount)
      //     break
      //   case 'role':
      //     commit('changeRoleList', list)
      //     commit('changeRoleCount', totalCount)
      //     break
      // }
    },
    async deletePageDataItemAction({ dispatch }, payload: any) {
      // 1. 获取 pageName 和 id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`

      // 2. 发送删除的网络请求
      await deletePageDataItem(pageUrl)

      // 3. 重新获取页面表格数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 5
        }
      })
    },
    async createPageDataItemAction({ dispatch }, payload: any) {
      // 1. 创建数据的请求
      const { pageName, newData } = payload
      console.log(
        '🚀 ~ file: system.ts ~ line 124 ~ createPageDataItemAction ~ newData',
        newData
      )
      const pageUrl = `/${pageName}`
      await createPageDataItem(pageUrl, newData)

      // 2. 请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 5
        }
      })
    },
    async editPageDataItemAction({ dispatch }, payload: any) {
      // 1. 编辑数据的请求
      const { pageName, id, editData } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageDataItem(pageUrl, editData)

      // 2. 请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 5
        }
      })
    }
  }
}

export default systemModule
