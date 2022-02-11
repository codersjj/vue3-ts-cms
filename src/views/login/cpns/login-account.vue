<template>
  <div class="login-account">
    <el-form label-width="52px" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    // 因为账号和密码联系比较紧密，所以这里我们选择使用 reactive
    const account = reactive({
      name: '',
      password: ''
    })

    // 编写验证规则
    const rules = {
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

    return { account, rules }
  }
})
</script>

<style scoped></style>
