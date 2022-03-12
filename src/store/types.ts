import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'

export interface IRootState {
  name: string
  age: number
  allDepartments: any[]
  allRoles: any[]
}

export interface IRootWithModule {
  // 定义 login 模块的 state 的类型
  login: ILoginState
  // 定义其它模块的 state 的类型
  system: ISystemState
}

// 定义一个交叉类型（既包含 IRootState 中的属性，又包含 IRootWithModule 中的属性）
export type IStoreType = IRootState & IRootWithModule
