// 编写验证规则
export const rules = {
  // name: [{针对 name 属性的规则1}, {针对 name 属性的规则2}],
  // password: [{针对 password 属性的规则1}, {针对 password 属性的规则2}]
  name: [
    {
      required: true,
      message: '请输入账号~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '账号必须是5~10个字母或数字~',
      trigger: 'blur'
    }
  ],
  password: [
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
}
