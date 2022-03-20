<template>
  <div class="pie-chart">
    <base-chart :option="option"></base-chart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import BaseChart from '@/base-ui/chart'

import { IDataType } from '../types'

const props = defineProps<{
  pieData: IDataType[]
}>()

// 使用 computed 收集 props.pieData 依赖，后续 props.pieData 改变时，option 就会进行更新，使用了 option 的 template 就会重新进行渲染
const option = computed(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: '分类商品',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style scoped></style>
