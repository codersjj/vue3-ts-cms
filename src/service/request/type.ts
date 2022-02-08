import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface JJRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface JJRequestConfig extends AxiosRequestConfig {
  interceptors?: JJRequestInterceptors
  showLoading?: boolean
}
