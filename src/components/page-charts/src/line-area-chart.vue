<template>
  <div class="line-area-chart">
    <base-chart :option="option"></base-chart>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'
import BaseChart from '@/base-ui/chart'

const props = withDefaults(
  defineProps<{
    title?: string
    xAxisLabels: string[]
    seriesData: any[]
    seriesName?: string
  }>(),
  {
    title: '',
    seriesName: '销量'
  }
)

const option = computed(() => ({
  title: {
    text: props.title
  },
  legend: {
    show: true
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    },
    right: 20
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: props.xAxisLabels
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: props.seriesName,
      type: 'line',
      stack: '总量',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: props.seriesData
    }
  ]
}))
</script>

<style scoped></style>
