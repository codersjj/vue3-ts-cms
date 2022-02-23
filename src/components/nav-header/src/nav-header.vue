<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <component :is="isFold ? 'fold' : 'expand'"></component>
    </el-icon>
    <div class="content">
      <jj-breadcrumb :breadcrumb-items="breadcrumbItems" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import UserInfo from './cpns/user-info.vue'
import JjBreadcrumb from '@/base-ui/breadcrumb'
import { mapPathToBreadcrumbItems } from '@/utils/map-menus'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    UserInfo,
    JjBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(true)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', !isFold.value)
    }

    const store = useStore()
    const route = useRoute()
    // 面包屑的数据：[{text: '', path: ''}, {text: '', path: ''}, ...]
    const breadcrumbItems = computed(() => {
      // 菜单数据发生改变时要进行重新获取，所以放在 computed 中
      const userMenus = store.state.login.userMenus
      // 路由数据发生改变时要进行重新获取，所以放在 computed 中
      const currentPath = route.path
      return mapPathToBreadcrumbItems(userMenus, currentPath)
    })

    return { isFold, breadcrumbItems, handleFoldClick }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    flex: 1;
    padding: 0 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
