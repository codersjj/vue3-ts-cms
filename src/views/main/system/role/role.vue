<template>
  <div class="role">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetBtnClick"
      @queryBtnClick="handleQueryBtnClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      parentName="system"
      pageName="role"
      @editBtnClick="handleEditBtnClick"
    >
      <template #create>
        <el-button type="primary" @click="handleNewBtnClick"
          >新建角色</el-button
        >
      </template>
    </page-content>
    <page-modal
      ref="pageModalRef"
      :modalFormConfig="modalFormConfig"
      pageName="role"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      :title="Object.keys(defaultInfo).length ? '编辑角色' : '新建角色'"
    >
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheck"
        />
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import { useStore } from '@/store'
import { mapMenuToLeafKeys } from '@/utils/map-menus'

import { ElTree } from 'element-plus'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalFormConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, handleResetBtnClick, handleQueryBtnClick] =
      usePageSearch()

    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallback = (pageModalRef: any, item: any) => {
      const leafKeys = mapMenuToLeafKeys(item.menuList)
      nextTick(() => {
        console.log(
          '🚀 ~ file: role.vue ~ line 85 ~ editCallback ~ nextTick ~ elTreeRef.value',
          elTreeRef.value
        )
        elTreeRef.value?.setCheckedKeys(leafKeys)
      })
    }
    const [pageModalRef, defaultInfo, handleNewBtnClick, handleEditBtnClick] =
      usePageModal(undefined, editCallback)

    const store = useStore()
    const menus = computed(() => store.state.allMenus)

    const otherInfo = ref({})
    const handleCheck = (obj1: any, obj2: any) => {
      console.log('obj1:', obj1)
      console.log('obj2:', obj2)
      const { checkedKeys, halfCheckedKeys } = obj2
      const menuKeyList = [...checkedKeys, ...halfCheckedKeys]
      // 注意：这里的字段（menuList）需和后端对应
      otherInfo.value = { menuList: menuKeyList }
    }

    return {
      searchFormConfig,
      contentTableConfig,
      modalFormConfig,
      pageContentRef,
      pageModalRef,
      elTreeRef,
      defaultInfo,
      otherInfo,
      menus,
      handleResetBtnClick,
      handleQueryBtnClick,
      handleNewBtnClick,
      handleEditBtnClick,
      handleCheck
    }
  }
})
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 30px;
}
</style>
