<template>
  <div class="base-chart">
    <div ref="chartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults } from 'vue'
import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'

// defineProps({
//   // String 是 JS 的类型
//   width: String,
//   height: String
// })

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
  const echartsInstance = echarts.init(chartDivRef.value!)
  // const option = {
  //   xAxis: {
  //     type: 'category',
  //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //   },
  //   yAxis: {
  //     type: 'value'
  //   },
  //   series: [
  //     {
  //       data: [120, 200, 150, 80, 70, 110, 130],
  //       type: 'bar'
  //     }
  //   ]
  // }
  echartsInstance.setOption(props.option)
})
</script>

<style scoped></style>
