<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetBtnClick"
      @queryBtnClick="handleQueryBtnClick"
    />
    <!-- 注意：这里 ref 前面不需要加冒号（:），如果不是绑定的函数，加了冒号反而会获取不到该组件的引用 -->
    <!-- 这个的话我没有专门儿去注意，但是我的判断的话，他肯定是在解析这个 template 模板的时候，然后发现这个有 ref 属性，然后会专门针对 ref 属性去绑定，就是在 setup 里面定义的 ref 相关的值的。 -->
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      parentName="system"
      pageName="users"
      @editBtnClick="handleEditBtnClick"
    >
      <template #create>
        <el-button type="primary" @click="handleNewBtnClick"
          >新建用户</el-button
        >
      </template>
      <template #audit>
        <el-button type="primary">审核</el-button>
      </template>
      <template #refresh>
        <el-button>
          <el-icon><refresh /></el-icon>
        </el-button>
      </template>

      <template #status="scope">
        <el-button
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          plain
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
    </page-content>
    <page-modal
      ref="pageModalRef"
      :modalFormConfig="modalFormConfig"
      :defaultInfo="defaultInfo"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalFormConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'users',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, handleResetBtnClick, handleQueryBtnClick] =
      usePageSearch()

    const pageModalRef = ref<InstanceType<typeof PageModal>>()

    const defaultInfo = ref({})

    const handleNewBtnClick = () => {
      defaultInfo.value = {}
      if (pageModalRef.value) {
        pageModalRef.value.dialogVisible = true
      }
    }

    const handleEditBtnClick = (item: any) => {
      defaultInfo.value = { ...item }
      if (pageModalRef.value) {
        pageModalRef.value.dialogVisible = true
      }
    }

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
