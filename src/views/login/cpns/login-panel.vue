<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="login-panel-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><user /></el-icon>账号登录
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane label="手机登录">
        <template #label>
          <span>
            <el-icon><cellphone /></el-icon>手机登录
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { User, Cellphone } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    User,
    Cellphone,
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isKeepPassword = ref(true)
    // 可以直接使用 ref()，这时会根据泛型自动推导出 any 类型，所以下面 accountRef.value 的类型就成了 any 类型，再去调用 loginAction() 就不会编译报错。但这样做就缺失了类型检测，因此不建议这样做。
    // const accountRef = ref()
    // typeof LoginAccount 获取 LoginAccount 组件导出的对象的类型
    // InstanceType<typeof LoginAccount> 获取 LoginAccount 组件导出的对象真正的类型（构造函数类型的返回类型）
    const accountRef = ref<InstanceType<typeof LoginAccount>>()

    const handleLoginClick = () => {
      console.log('点击了立即登录')
      // accountRef.value 拿到 LoginAccount 组件对象后再去调用该组件对象中的 loginAction() 方法
      accountRef.value?.loginAction()
    }

    return { isKeepPassword, handleLoginClick, accountRef }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 320px;
  .title {
    text-align: center;
  }
  .login-panel-tabs /deep/ .el-tabs__content {
    padding: 32px;
    background-color: #f4f5f7;
    color: #6b778c;
  }

  .account-control {
    display: flex;
    justify-content: space-between;
    margin-top: 6px;
  }

  .login-btn {
    width: 100%;
    margin-top: 3px;
  }
}
</style>
