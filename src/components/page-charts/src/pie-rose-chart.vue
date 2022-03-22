<template>
  <div class="pie-rose-chart">
    <base-chart :option="option"></base-chart>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import BaseChart from '@/base-ui/chart'

import { IDataType } from '../types'

const props = defineProps<{
  pieRoseData: IDataType[]
}>()

const option = computed(() => ({
  tooltip: {
    show: true
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    },
    right: 20
  },
  series: [
    {
      name: '分类商品',
      type: 'pie',
      radius: [20, 120],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: props.pieRoseData
    }
  ]
}))
</script>

<style scoped></style>
