<template>
  <div class="jj-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="showSelectionColumn"
        type="selection"
        align="center"
        width="60"
      />
      <el-table-column
        v-if="showIndexColumn"
        label="序号"
        type="index"
        align="center"
        width="60"
      />
      <template v-for="attributes in attributesList" :key="attributes.prop">
        <el-table-column v-bind="attributes" align="center">
          <template #default="slotProps">
            <slot :name="attributes.slotName" :row="slotProps.row">
              {{ slotProps.row[attributes.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          v-model:currentPage="pagination.currentPage"
          v-model:pageSize="pagination.pageSize"
          :page-sizes="[5, 10, 20, 40]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableDataCount"
          @current-change="handleCurrentPageChange"
          @size-change="handlePageSizeChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    tableData: {
      type: Array,
      required: true
    },
    tableDataCount: {
      type: Number,
      default: 0
    },
    attributesList: {
      type: Array as PropType<any[]>,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectionColumn: {
      type: Boolean,
      default: false
    },
    pagination: {
      type: Object,
      default: () => ({ currentPage: 1, pageSize: 10 })
    }
  },
  emits: ['selectionChange', 'update:pagination'],
  setup(props, { emit }) {
    const handleSelectionChange = (selection: any) => {
      console.log(selection)
      emit('selectionChange', selection)
    }

    const handleCurrentPageChange = (currentPage: number) => {
      emit('update:pagination', { ...props.pagination, currentPage })
    }
    const handlePageSizeChange = (pageSize: number) => {
      emit('update:pagination', { ...props.pagination, pageSize })
    }

    return {
      handleSelectionChange,
      handleCurrentPageChange,
      handlePageSizeChange
    }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  padding: 0 5px;

  .title {
    font-size: 20px;
    font-weight: 700;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    justify-content: flex-end;
  }
}
</style>
