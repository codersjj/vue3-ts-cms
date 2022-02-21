type FormItemType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  type: FormItemType
  label: string
  rules?: any[]
  placeholder?: any
  // 针对 select
  options?: any[]
  // 其它特殊的属性
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
