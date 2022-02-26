<template>
  <div class="jj-table">
    <el-table :data="tableData" border style="width: 100%">
      <template v-for="attributes in attributesList" :key="attributes.prop">
        <!-- <el-table-column prop="name" label="姓名" min-width="180" /> -->
        <el-table-column v-bind="attributes" align="center">
          <!-- el-table-column 中是提供了插槽的 -->
          <!-- <el-button>666</el-button> -->
          <!-- 即 -->
          <!-- <template #default>
            <el-button>666</el-button>
          </template> -->
          <!-- 使用作用域插槽，实现数据的个性化展示 -->
          <template #default="slotProps">
            <el-button>{{ slotProps.row[attributes.prop] }}</el-button>
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
