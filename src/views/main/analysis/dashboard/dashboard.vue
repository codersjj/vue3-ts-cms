<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <jj-card title="分类商品数量(饼图)"></jj-card>
      </el-col>
      <el-col :span="10">
        <jj-card title="不同城市商品销量">
          <base-chart :option="option"></base-chart>
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
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

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

    return { option }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
