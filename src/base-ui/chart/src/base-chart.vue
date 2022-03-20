<template>
  <div class="base-chart">
    <div ref="chartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  onMounted,
  defineProps,
  withDefaults,
  defineExpose,
  watch
} from 'vue'
import { EChartsOption } from 'echarts'

import { useChart } from '../hooks/useChart'

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
const resize = ref()
watch(resize, (newVal, oldVal) => {
  console.log(
    '🚀 ~ file: base-chart.vue ~ line 39 ~ watch ~ newVal, oldVal',
    newVal,
    oldVal
  )
  if (!oldVal) resize.value = newVal
})
onMounted(() => {
  const { setOption, updateSize } = useChart(chartDivRef.value!)
  setOption(props.option)
  resize.value = updateSize
})

defineExpose({
  resize
})
</script>

<style scoped></style>
