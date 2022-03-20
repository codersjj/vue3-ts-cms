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
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import JjCard from '@/base-ui/card'
import { PieChart } from '@/components/page-charts'

export default defineComponent({
  name: 'dashboard',
  components: {
    JjCard,
    PieChart
  },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')

    // 使用 computed，以保证 Vuex 中的数据更新时，这里可以重新拿到更新后的数据，之后使用了 categoryGoodsCountData 的 template 就能重新进行渲染
    const categoryGoodsCountData = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item) => ({
        value: item.goodsCount,
        name: item.name
      }))
    })

    return { categoryGoodsCountData }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
