<template>
  <div class="descriptions">
    <el-descriptions :title="title" border :column="column">
      <template v-for="item in descriptionsData" :key="item.label">
        <el-descriptions-item
          :label-class-name="labelClassName"
          :class-name="className"
        >
          <template #label>{{ item.label }} </template>
          <el-tag size="small">{{ item.description }}</el-tag>
        </el-descriptions-item>
      </template>
    </el-descriptions>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

import { IDescription } from '@/base-ui/descriptions'

withDefaults(
  defineProps<{
    title?: string
    column?: number
    descriptionsData?: IDescription[]
    labelClassName?: string
    className?: string
  }>(),
  {
    title: '',
    column: 1,
    descriptionsData: () => []
  }
)
</script>

<style scoped lang="less">
.descriptions {
  margin-bottom: 20px;
}
</style>
