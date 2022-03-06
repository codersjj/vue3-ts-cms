import { Module } from 'vuex'

import { IProductState } from './types'
import { IRootState } from '@/store/types'

import { getPageListData } from '@/service/main/system/system'

const productModule: Module<IProductState, IRootState> = {
  namespaced: true,
  state() {
    return {
      goodsList: [],
      goodsCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListDataCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  mutations: {
    changeGoodsList(state, goodsList: any) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`

      const pageListData = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageListData.data

      if (totalCount && !list.length) {
        return
      }

      commit('changeGoodsList', list)
      commit('changeGoodsCount', totalCount)
    }
  }
}

export default productModule
