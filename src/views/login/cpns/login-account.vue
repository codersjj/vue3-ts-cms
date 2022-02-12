<template>
  <div class="login-account">
    <el-form label-width="52px" :rules="rules" :model="account" ref="formRef">
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
import { defineComponent, reactive, ref } from 'vue'
// 虽然我们已经全局注册了 ElForm，但这里依然导入了 ElForm 是为了在下面 typeof ElForm 时引用一下 ElForm 以获取其类型
import { ElForm } from 'element-plus'

import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    // 因为账号和密码联系比较紧密，所以这里我们选择使用 reactive
    const account = reactive({
      name: '',
      password: ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = () => {
      console.log('login-account 正在准备登录~')
      // formRef.value 拿到上面 template 中的 ElForm 组件对象后再去调用该组件对象中的 validate() 方法，
      // 用来对整个表单作验证。
      // 该方法中会回调我们传入的这个函数，回调函数会包含两个参数：一个布尔值，表示表单验证是否通过；一个对象，包含所有未通过验证的字段。
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('真正开始执行登录逻辑...')
        }
      })
    }

    // 注意：虽然在 setup() 中没有再去使用 rules，但这里依然需要把 rules 给 return 出去，这样才能在 template 中使用
    // 在 template 中能用的东西必须是在 data/computed/props 中的，或者在 setup() 返回的对象中的
    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
