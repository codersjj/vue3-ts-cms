<template>
  <div class="dashboard">
    <!-- 1. 为 ECharts 准备一个定义了宽高的 DOM -->
    <div ref="divRef" :style="{ width: '800px', height: '600px' }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

import * as echarts from 'echarts'

export default defineComponent({
  name: 'dashboard',
  setup() {
    const divRef = ref<HTMLElement>()
    // 在 setup 的时候，模板还没处理，所以 divRef 还没有绑定到模板中，此时拿到的 divRef.value 还是 undefined，
    // 所以我们可以在 onMouted() 方法中写，这个时候组件就已经挂载完了，就能拿到 divRef.value 的值了
    onMounted(() => {
      console.log(
        '🚀 ~ file: dashboard.vue ~ line 17 ~ setup ~ divRef.value',
        divRef.value
      )
      // 2. 基于准备好的 dom，初始化 echarts 实例
      const echartsInstance = echarts.init(divRef.value!)
      // 3. 指定图表的配置项和数据
      const option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
      // 4. 使用指定的配置项和数据绘制图表
      echartsInstance.setOption(option)
    })

    return {
      divRef
    }
  }
})
</script>

<style scoped></style>
