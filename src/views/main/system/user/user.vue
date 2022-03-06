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
    >
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'users',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const [pageContentRef, handleResetBtnClick, handleQueryBtnClick] =
      usePageSearch()

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleResetBtnClick,
      handleQueryBtnClick
    }
  }
})
</script>

<style scoped></style>
