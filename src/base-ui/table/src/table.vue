<template>
  <div class="jj-table">
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
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
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

<style scoped></style>
