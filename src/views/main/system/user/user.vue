<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />

    <div class="content">
      <el-table :data="userList" border style="width: 100%">
        <template v-for="attributes in attributesList" :key="attributes.prop">
          <!-- <el-table-column prop="name" label="姓名" min-width="180" /> -->
          <el-table-column v-bind="attributes" align="center" />
        </template>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    // 使用 computed 的目的是当数据发生改变时，可以自动重新获取到
    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    const attributesList = [
      { prop: 'name', label: '姓名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100' },
      { prop: 'createAt', label: '创建时间', minWidth: '230' },
      { prop: 'updateAt', label: '更新时间', minWidth: '230' }
    ]

    return { searchFormConfig, userList, attributesList }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 10px solid #f5f5f5;
}
</style>
