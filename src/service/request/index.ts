import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { JJRequestInterceptors, JJRequestConfig } from './type'

class JJRequest {
  instance: AxiosInstance
  interceptors?: JJRequestInterceptors

  constructor(config: JJRequestConfig) {
    this.instance = axios.create(config)
    // 从 config 中取出的拦截器是对应的 axios 实例的拦截器
    this.interceptors = config.interceptors
    // 添加对应的 axios 实例所有的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有 axios 实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有 axios 实例都有的拦截器：请求成功的拦截')
        return config
      },
      (err) => {
        console.log('所有 axios 实例都有的拦截器：请求失败的拦截')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有 axios 实例都有的拦截器：响应成功的拦截')
        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败~，错误信息...')
        } else {
          return data
        }
      },
      (err) => {
        console.log('所有 axios 实例都有的拦截器：响应失败的拦截')
        // 判断不同的 HttpErrorCode 显示不同的错误信息
        if (err.response.status === 404) {
          console.log('404的错误~')
        }
        return err
      }
    )
  }
  request(config: JJRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}

export default JJRequest
