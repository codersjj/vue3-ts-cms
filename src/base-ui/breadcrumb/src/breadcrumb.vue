<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbItems" :key="item.text">
        <el-breadcrumb-item :to="{ path: item.path ?? '' }">{{
          item.text
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadcrumbItem } from '../types'

export default defineComponent({
  props: {
    breadcrumbItems: {
      type: Array as PropType<IBreadcrumbItem[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
