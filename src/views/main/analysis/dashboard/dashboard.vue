<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <jj-card title="分类商品数量(饼图)">
          <base-chart
            ref="categoryGoodsCountRef"
            :option="option2"
          ></base-chart>
        </jj-card>
      </el-col>
      <el-col :span="10">
        <jj-card title="不同城市商品销量">
          <base-chart ref="cityGoodsSalesRef" :option="option"></base-chart>
        </jj-card>
      </el-col>
      <el-col :span="7">
        <jj-card title="分类商品数量(玫瑰图)"></jj-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <jj-card title="分类商品的销量"></jj-card>
      </el-col>
      <el-col :span="12">
        <jj-card title="分类商品的收藏"></jj-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useStore } from 'vuex'

import eventBus from '@/utils/eventBus'

import JjCard from '@/base-ui/card'
import BaseChart from '@/base-ui/chart'

export default defineComponent({
  name: 'dashboard',
  components: {
    JjCard,
    BaseChart
  },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')

    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    }
    const cityGoodsSalesRef = ref<InstanceType<typeof BaseChart>>()
    onMounted(() => {
      console.log('cityGoodsSalesRef.value', cityGoodsSalesRef.value!.resize)
      eventBus.emit(
        'cityGoodsSalesChartResize',
        cityGoodsSalesRef.value!.resize
      )
    })

    const option2 = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
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
    const categoryGoodsCountRef = ref<InstanceType<typeof BaseChart>>()
    onMounted(() => {
      eventBus.emit(
        'categoryGoodsCountChartResize',
        categoryGoodsCountRef.value!.resize
      )
    })

    return { option, option2, cityGoodsSalesRef, categoryGoodsCountRef }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
