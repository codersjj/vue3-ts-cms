<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @foldChange="handleFoldChange" />
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import eventBus from '@/utils/eventBus'

import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'

export default defineComponent({
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    const chartResizeFns = ref<any>([])
    eventBus.on('chartResize', (resize: any) => {
      chartResizeFns.value.push(resize)
    })

    const isCollapse = ref(false)
    const handleFoldChange = (isFold: boolean) => {
      isCollapse.value = isFold
      for (const chartResizeFn of chartResizeFns.value) {
        // 设置定时器（注意延迟时间要大于菜单栏折叠/展开动画的执行时长，否则可能还没调整完大小就结束了）解决菜单栏折叠/展开时图表 resize 无效的问题
        setTimeout(chartResizeFn, 320)
      }
    }

    return { isCollapse, handleFoldChange }
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
    transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;
    // line-height: 200px;
    // overflow-x: hidden;
    // overflow-y: auto;
    // text-align: left;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */
    // 隐藏滚动条
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .page-content {
    height: calc(100% - 48px);
    .page-info {
      background-color: #fff;
      border-radius: 5px;
    }
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
  background-color: #f0f2f5;
}
</style>
