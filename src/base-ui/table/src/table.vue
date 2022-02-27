<template>
  <div class="jj-table">
    <el-table :data="tableData" border style="width: 100%">
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
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
