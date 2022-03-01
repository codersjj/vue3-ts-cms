<template>
  <div class="page-content">
    <jj-table
      :tableData="dataList"
      v-bind="contentTableConfig"
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
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import JjTable from '@/base-ui/table'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    JjTable
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    // 使用 computed 的目的是当数据发生改变时，可以自动重新获取到
    const dataList = computed(() =>
      // 调用 system 模块中的 pageListData 这个 getter 返回的函数
      store.getters['system/pageListData'](props.pageName)
    )
    // const userCount = computed(() => store.state.system.userCount)

    const handleSelectionChange = (selection: any) => {
      console.log(
        '🚀 ~ file: user.vue ~ line 84 ~ handleSelectionChange ~ selection',
        selection
      )
    }
    return {
      dataList,
      handleSelectionChange
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 10px solid #f5f5f5;
}

.operation-del-btn {
  color: orangered;
}
</style>
