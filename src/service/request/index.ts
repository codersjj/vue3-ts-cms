import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { JJRequestInterceptors, JJRequestConfig } from './type'

import { ElLoading } from 'element-plus'
// 注意引入对应的样式
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-loading.css'

const DEFAULT_LOADING = true

class JJRequest {
  instance: AxiosInstance
  interceptors?: JJRequestInterceptors
  showLoading: boolean
  loading: any

  constructor(config: JJRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
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

        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0, 0, 0, 0.8)'
          })
        }

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

        // 将 loading 效果移除
        this.loading?.close()

        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败~，错误信息...')
        } else {
          return data
        }
      },
      (err) => {
        console.log('所有 axios 实例都有的拦截器：响应失败的拦截')

        // 将 loading 效果移除
        this.loading?.close()

        // 判断不同的 HttpErrorCode 显示不同的错误信息
        if (err.response.status === 404) {
          console.log('404的错误~')
        }
        return err
      }
    )
  }

  request<T>(config: JJRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求对请求 config 的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 判断是否需要显示 loading
      if (config.showLoading === !DEFAULT_LOADING) {
        // 将当前实例的 showLoading 设置为默认值取反
        this.showLoading = !DEFAULT_LOADING
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          // 在拿到请求数据后，将当前实例的 showLoading 重新设置回默认值（constructor 中设置的 true），这样就不会影响下一个请求，
          // 不然的话如果之前某个请求中 config.showLoading 为 false，那么下一个请求中 this.showLoading 还会是 false
          this.showLoading = DEFAULT_LOADING

          // 将结果 resolve 返回出去
          resolve(res)
        })
        .catch((err) => {
          // 将 showLoading 设置为 true，这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }
}

export default JJRequest
