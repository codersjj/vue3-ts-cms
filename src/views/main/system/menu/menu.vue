<template>
  <div class="menu">
    <!-- <page-search
      :search-form-config="searchFormConfig"
      @resetBtnClick="handleResetBtnClick"
      @query-btn-click="handleQueryBtnClick"
    /> -->
    <page-content
      ref="pageContentRef"
      :content-table-config="contentTableConfig"
      parentName="system"
      pageName="menu"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'jj-menu',
  components: {
    // PageSearch,
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
