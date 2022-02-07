// service 统一的出口
import JJRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const jjRequest = new JJRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default jjRequest
