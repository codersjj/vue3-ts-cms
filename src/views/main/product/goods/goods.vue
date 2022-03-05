<template>
  <div class="goods">
    <page-content :contentTableConfig="contentTableConfig" page-name="goods">
      <!-- goods.vue -> page-content.vue 中的动态插槽 -> table.vue 中的 image 插槽 -->
      <template v-slot:image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          preview-teleported
        />
      </template>
      <template #oldPriceSlot="scope">
        <span>{{ '¥' + scope.row.oldPrice }}</span>
      </template>
      <template #newPrice="scope">
        <span>{{ '¥' + scope.row.newPrice }}</span>
      </template>
      <template #status="scope">
        <el-button
          size="small"
          :type="scope.row.status ? 'success' : 'danger'"
          plain
        >
          {{ scope.row.status ? '启用' : '禁用' }}
        </el-button>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// PageContent 也可以考虑进行全局注册（app.component()），这样可以在各个页面中无需注册直接使用
import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'goods',
  components: {
    PageContent
  },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
