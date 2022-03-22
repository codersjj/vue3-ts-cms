<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <jj-card title="分类商品数量(饼图)">
          <pie-chart :pieData="categoryGoodsCountData"></pie-chart>
        </jj-card>
      </el-col>
      <el-col :span="10">
        <jj-card title="不同城市商品销量"></jj-card>
      </el-col>
      <el-col :span="7">
        <jj-card title="分类商品数量(玫瑰图)">
          <pie-rose-chart
            :pieRoseData="categoryGoodsCountData"
          ></pie-rose-chart>
        </jj-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <jj-card title="分类商品的销量">
          <line-area-chart v-bind="categoryGoodsSalesData"></line-area-chart>
        </jj-card>
      </el-col>
      <el-col :span="12">
        <jj-card title="分类商品的收藏">
          <bar-chart v-bind="categoryGoodsFavorData"></bar-chart>
        </jj-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import JjCard from '@/base-ui/card'
import {
  PieChart,
  PieRoseChart,
  LineAreaChart,
  BarChart
} from '@/components/page-charts'

export default defineComponent({
  name: 'dashboard',
  components: {
    JjCard,
    PieChart,
    PieRoseChart,
    LineAreaChart,
    BarChart
  },
  setup() {
    const store = useStore()
    // ==================== 请求数据 ====================
    store.dispatch('dashboard/getDashboardDataAction')

    // ==================== 获取数据 ====================
    // 使用 computed，以保证 Vuex 中的数据更新时，这里可以重新拿到更新后的数据，之后使用了 categoryGoodsCountData 的 template 就能重新进行渲染
    const categoryGoodsCountData = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item) => ({
        value: item.goodsCount,
        name: item.name
      }))
    })

    const categoryGoodsSalesData = computed(() => {
      const xAxisLabels: string[] = []
      const seriesData: any[] = []

      const categoryGoodsSales = store.state.dashboard.categoryGoodsSales
      for (const item of categoryGoodsSales) {
        xAxisLabels.push(item.name)
        seriesData.push(item.goodsCount)
      }

      return { xAxisLabels, seriesData }
    })

    const categoryGoodsFavorData = computed(() => {
      const dataAxis: string[] = []
      const data: any[] = []

      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        dataAxis.push(item.name)
        data.push(item.goodsFavor)
      }

      return { dataAxis, data }
    })

    return {
      categoryGoodsCountData,
      categoryGoodsSalesData,
      categoryGoodsFavorData
    }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
