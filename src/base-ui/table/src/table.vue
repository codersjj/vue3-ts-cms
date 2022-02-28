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
          :page-sizes="[100, 200, 300, 400]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
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
    }
  },
  emits: ['selectionChange'],
  setup(props, { emit }) {
    const handleSelectionChange = (selection: any) => {
      console.log(selection)
      emit('selectionChange', selection)
    }

    return {
      handleSelectionChange
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
