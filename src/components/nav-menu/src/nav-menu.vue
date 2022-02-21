<template>
  <div class="nav-menu">
    <!-- logo -->
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!collapse" class="title">Vue3 + TS</span>
    </div>
    <!-- menu list -->
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      :collapse="collapse"
      background-color="#001523"
      text-color="#b7bdc3"
      active-text-color="#62b0ff"
      :unique-opened="false"
    >
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
            <!-- 遍历子菜单 -->
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item
                :index="subItem.id + ''"
                @click="handleMenuItemClick(subItem)"
              >
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
          <el-menu-item :index="item.id + ''">
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
import { useStore } from '@/store/index'
import { useRouter } from 'vue-router'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    // 使用自己封装的 useStore() 函数后，store.state 的类型就是我们自己定义的 IStoreType 类型了，而不是默认的 any 类型。这样就不会出现从 store.state 中取错属性的问题了。
    const userMenus = computed(() => store.state.login.userMenus)

    const router = useRouter()

    const handleMenuItemClick = (menuItem: any) => {
      router.push({
        path: menuItem.url ?? '/not-found'
      })
    }

    return { userMenus, handleMenuItemClick }
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
      margin: 0 10px 0 8px;
    }

    .title {
      color: white;
      font-size: 16px;
      font-weight: 700;
      white-space: nowrap;
      // text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .el-menu {
    // 去除右边框（调试技巧：将 el-aside 的 width 固定宽度后再折叠菜单，方便看到右边框）
    border-right: none;
  }

  .el-sub-menu {
    // background-color: #001529;
    // 二级菜单（默认背景）
    .el-menu-item {
      background-color: #0c2135;
      padding-left: 50px !important;
    }
  }

  ::v-deep .el-sub-menu__title {
    background-color: #001529 !important;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
    // 这里设置 color 会覆盖掉 el-menu 上 active-text-color 属性设置的值
    color: #fff;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  // 包含块的高度减去 logo 区域的高度
  height: calc(100% - 48px);
  width: 100%;
}

.el-menu--collapse .el-sub-menu.is-active i {
  color: #409eff;
}
</style>
