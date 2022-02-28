<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />

    <div class="content">
      <jj-table
        :title="title"
        :tableData="userList"
        :attributesList="attributesList"
        :showIndexColumn="showIndexColumn"
        showSelectionColumn
        @selectionChange="handleSelectionChange"
      >
        <!-- 1. header 中的插槽 -->
        <template #headerHandler>
          <el-button type="primary">新建用户</el-button>
          <el-button>
            <el-icon><refresh /></el-icon>
          </el-button>
        </template>

        <!-- 2. 列表（el-table）中的插槽 -->
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
        <!-- 操作列不需要拿到当前行的数据，所以不需要向上面那样使用作用域插槽，只需要使用具名插槽即可 -->
        <template #operation>
          <div class="operation-btns">
            <el-button type="text">
              <el-icon><edit /></el-icon>
              <span>编辑</span>
            </el-button>
            <el-button type="text" class="operation-del-btn">
              <el-icon><delete /></el-icon>
              <span>删除</span>
            </el-button>
          </div>
        </template>

        <!-- <template #header>哈哈哈</template> -->
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

    const title = '用户列表'

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
      },
      { label: '操作', minWidth: '200', slotName: 'operation' }
    ]

    const showIndexColumn = true
    const showSelectionColumn = true

    const handleSelectionChange = (selection: any) => {
      console.log(
        '🚀 ~ file: user.vue ~ line 84 ~ handleSelectionChange ~ selection',
        selection
      )
    }

    return {
      searchFormConfig,
      userList,
      title,
      attributesList,
      showIndexColumn,
      showSelectionColumn,
      handleSelectionChange
    }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 10px solid #f5f5f5;
}

.operation-del-btn {
  color: orangered;
}
</style>
