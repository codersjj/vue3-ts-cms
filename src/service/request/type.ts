import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface JJRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface JJRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: JJRequestInterceptors<T>
  showLoading?: boolean
}
