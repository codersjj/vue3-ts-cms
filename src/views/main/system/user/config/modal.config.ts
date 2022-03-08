import { IForm } from '@/base-ui/form'

export const modalFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '手机号',
      placeholder: '请输入手机号'
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: { padding: '8px 30px 8px 10px' }
}
