// service 统一的出口
import JJRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const jjRequest = new JJRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带 token 的拦截
      const token = 'xxx'
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }

      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截')
      return err
    }
  }
})

export default jjRequest
