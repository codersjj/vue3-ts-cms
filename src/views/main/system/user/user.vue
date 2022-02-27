<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />

    <div class="content">
      <jj-table :tableData="userList" :attributesList="attributesList">
        <template #status="scope">
          <el-button
            size="small"
            :type="scope.row.enable ? 'success' : 'danger'"
            plain
            >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
          >
        </template>
        <template #createAt="scope">
          <span>{{ $filters.formatUTCTime(scope.row.createAt) }}</span>
        </template>
        <template #updateAt="scope">
          <span>{{ $filters.formatUTCTime(scope.row.updateAt) }}</span>
        </template>
      </jj-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import PageSearch from '@/components/page-search'
import JjTable from '@/base-ui/table'

import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    JjTable
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    // 使用 computed 的目的是当数据发生改变时，可以自动重新获取到
    const userList = computed(() => store.state.system.userList)
    // const userCount = computed(() => store.state.system.userCount)

    const attributesList = [
      { prop: 'name', label: '姓名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '230',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '230',
        slotName: 'updateAt'
      }
    ]

    return { searchFormConfig, userList, attributesList }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 10px solid #f5f5f5;
}
</style>
