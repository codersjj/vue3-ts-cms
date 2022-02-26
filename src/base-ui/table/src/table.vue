<template>
  <div class="jj-table">
    <el-table :data="tableData" border style="width: 100%">
      <template v-for="attributes in attributesList" :key="attributes.prop">
        <!-- <el-table-column prop="name" label="姓名" min-width="180" /> -->
        <el-table-column v-bind="attributes" align="center" />
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    tableData: {
      type: Array,
      required: true
    },
    attributesList: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
