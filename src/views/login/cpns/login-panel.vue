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
        <h2>账号登录</h2>
      </el-tab-pane>
      <el-tab-pane label="手机登录">
        <template #label>
          <span>
            <el-icon><cellphone /></el-icon>手机登录
          </span>
        </template>
        <h2>手机登录</h2>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { User, Cellphone } from '@element-plus/icons-vue'

export default defineComponent({
  components: {
    User,
    Cellphone
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  .title {
    text-align: center;
  }
  .login-panel-tabs /deep/ .el-tabs__content {
    padding: 32px;
    background-color: #f4f5f7;
    color: #6b778c;
  }
}
</style>
