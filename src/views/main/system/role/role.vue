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
      :title="Object.keys(defaultInfo).length ? '编辑角色' : '新建角色'"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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

    const [pageModalRef, defaultInfo, handleNewBtnClick, handleEditBtnClick] =
      usePageModal()

    return {
      searchFormConfig,
      contentTableConfig,
      modalFormConfig,
      pageContentRef,
      pageModalRef,
      defaultInfo,
      handleResetBtnClick,
      handleQueryBtnClick,
      handleNewBtnClick,
      handleEditBtnClick
    }
  }
})
</script>

<style scoped></style>
