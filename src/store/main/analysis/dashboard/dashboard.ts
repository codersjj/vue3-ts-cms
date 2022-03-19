import { Module } from 'vuex'

import {
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSales,
  getCityGoodsSales
} from '@/service/main/analysis/dashboard/dashboard'

import { IDashboardState } from './types'
import { IRootState } from '@/store/types'

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSales: [],
      categoryGoodsFavor: [],
      cityGoodsSales: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSales(state, list) {
      state.categoryGoodsSales = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeCityGoodsSales(state, list) {
      state.cityGoodsSales = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryGoodsCountResult = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', categoryGoodsCountResult.data)

      const categoryGoodsSalesResult = await getCategoryGoodsSales()
      commit('changeCategoryGoodsSales', categoryGoodsSalesResult.data)

      const categoryGoodsFavorResult = await getCategoryGoodsFavor()
      commit('changeCategoryGoodsFavor', categoryGoodsFavorResult.data)

      const cityGoodsSalesResult = await getCityGoodsSales()
      commit('changeCityGoodsSales', cityGoodsSalesResult.data)
    }
  }
}

export default dashboardModule
