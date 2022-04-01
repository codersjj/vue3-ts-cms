<template>
  <div class="login">
    <el-row>
      <el-col :span="6" :offset="16">
        <login-panel />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './cpns/login-panel.vue'

export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.jpg') center;
  background-size: cover;

  .el-row {
    height: 100%;
    .el-col {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
