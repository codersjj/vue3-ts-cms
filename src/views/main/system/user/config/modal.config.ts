import { IForm } from '@/base-ui/form'

export const modalFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名',
      rules: [
        {
          required: true,
          message: '请输入用户名~',
          trigger: 'blur'
        },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: '账号必须是5~10位的字母或数字~',
          trigger: 'blur'
        }
      ]
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名',
      rules: [
        {
          required: true,
          message: '请输入真实姓名~',
          trigger: 'blur'
        }
      ]
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码',
      rules: [
        {
          required: true,
          message: '请输入密码~',
          trigger: 'blur'
        },
        {
          pattern: /^[a-z0-9]{3,}$/,
          message: '密码必须是3位以上的字母或数字~',
          trigger: 'blur'
        }
      ]
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
