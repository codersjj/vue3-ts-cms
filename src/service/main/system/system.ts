import jjRequest from '../../index'
import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  // 后端的设计是 post 的请求的原因是这里有很多的查询条件，使用 post 请求，方便把这些查询条件都放在 data 中
  return jjRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}

// url: /users/id
export function deletePageDataItem(url: string) {
  return jjRequest.delete<IDataType>({
    url
  })
}

export function createPageDataItem(url: string, newData: any) {
  return jjRequest.post<IDataType>({
    url,
    data: newData
  })
}

export function editPageDataItem(url: string, editData: any) {
  return jjRequest.patch<IDataType>({
    url,
    data: editData
  })
}
