import jjRequest from '../../index'

export function getPageListData(url: string, queryInfo: any) {
  // 后端的设计是 post 的请求的原因是这里有很多的查询条件，使用 post 请求，方便把这些查询条件都放在 data 中
  return jjRequest.post({
    url,
    data: queryInfo
  })
}
