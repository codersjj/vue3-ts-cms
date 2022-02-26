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
            <!-- 添加插槽，实现外部可以传入自定义数据的功能 -->
            <!-- <slot>
              {{ slotProps.row[attributes.prop] }}
            </slot> -->
            <!-- 外部应该可以使用具名插槽来对指定列数据进行修改，所以这里添加具名插槽，并且插槽名是根据外部传入的内容动态决定的 -->
            <slot :name="attributes.slotName">
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
