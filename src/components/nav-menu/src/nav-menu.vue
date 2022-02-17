<template>
  <div class="nav-menu">
    <!-- logo -->
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title">Vue3 + TS</span>
    </div>
    <!-- menu list -->
    <el-menu default-active="1" class="el-menu-vertical">
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单（这里指可以展开的菜单） -->
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon v-if="item.icon">
                <!-- 使用动态组件动态加载 icon -->
                <component :is="item.icon.substring(8)"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item>
                <el-icon v-if="subItem.icon">
                  <component :is="subItem.icon.substring(8)"></component>
                </el-icon>
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单（这里指可以切换路由跳转到页面的菜单） -->
        <template v-else-if="item.type === 2">
          <el-menu-item>
            <el-icon v-if="item.icon">
              <component :is="item.icon.substring(8)"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)

    return { userMenus }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background: #001529;

  .logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 28px;
    padding: 12px 10px 8px;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      color: white;
      font-size: 16px;
      font-weight: 700;
    }
  }

  .el-menu {
    border-right: none;
  }

  .el-sub-menu {
    // background-color: #001529;
    // 二级菜单（默认背景）
    .el-menu-item {
      background-color: #7fa58a;
      padding-left: 50px !important;
    }
  }

  ::v-deep .el-sub-menu__title {
    background-color: #d7dfe6;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
    color: #fff;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  // 包含块的高度减去 logo 区域的高度
  height: calc(100% - 48px);
  width: 100%;
}
</style>
