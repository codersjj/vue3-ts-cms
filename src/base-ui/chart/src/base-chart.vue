<template>
  <div class="base-chart">
    <div ref="chartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'

import { useChart } from '../hooks/useChart'

import eventBus from '@/utils/eventBus'

// 定义 props
const props = withDefaults(
  // 使用 TS 的泛型定义 props 的类型
  defineProps<{
    width?: string
    height?: string
    option: EChartsOption
  }>(),
  {
    // 在使用 echarts 时，宽度一般设置为 100%
    width: '100%',
    height: '400px'
  }
)

const chartDivRef = ref<HTMLElement>()
onMounted(() => {
  const { setOption, updateSize } = useChart(chartDivRef.value!)
  // （关键）使用 watchEffect，当 props.option 改变时，重新调用 setOption()
  watchEffect(() => {
    setOption(props.option)
  })
  eventBus.emit('chartResize', updateSize)
})
</script>

<style scoped></style>
