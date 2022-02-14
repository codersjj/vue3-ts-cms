<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="210px">Aside</el-aside>
      <el-container class="page">
        <el-header class="page-header">Header</el-header>
        <el-main class="page-content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.main {
  // position: fixed;
  // top: 0;
  // left: 0;
  // width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.main-content {
  display: flex;

  .el-aside {
    background: #001529;
  }

  .page-header {
    background: #f0f2f5;
  }

  .page-content {
    height: calc(100% - 48px);
    background: #888;
  }
}

.el-header {
  display: flex;
  text-align: center;
  align-items: center;
  color: #333;

  height: 48px !important;
}

.el-main {
  text-align: center;
  color: #333;
}
</style>
