import jjRequest from '@/service'

import { IDataType } from '@/service/types'

enum DashboardAPI {
  CategoryGoodsCount = '/goods/category/count',
  CategoryGoodsSales = '/goods/category/sale',
  CategoryGoodsFavor = '/goods/category/favor',
  CityGoodsSales = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return jjRequest.get<IDataType>({
    url: DashboardAPI.CategoryGoodsCount
  })
}

export function getCategoryGoodsSales() {
  return jjRequest.get<IDataType>({
    url: DashboardAPI.CategoryGoodsSales
  })
}

export function getCategoryGoodsFavor() {
  return jjRequest.get<IDataType>({
    url: DashboardAPI.CategoryGoodsFavor
  })
}

export function getCityGoodsSales() {
  return jjRequest.get<IDataType>({
    url: DashboardAPI.CityGoodsSales
  })
}
