<template>
  <div class="user">
    <jj-form v-bind="searchFormConfig" v-model="formData">
      <template v-slot:header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button>
            <el-icon><refresh-right /></el-icon>
            <span>重置</span>
          </el-button>
          <el-button type="primary">
            <el-icon><search /></el-icon>
            <span>搜索</span>
          </el-button>
        </div>
      </template>
    </jj-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import JjForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    JjForm
  },
  setup() {
    // 这里使用了 ref，而没有使用 reactive 的原因是：在使用 v-model 进行（元素/组件的）双向绑定时 reactive 会有些问题
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })

    return { searchFormConfig, formData }
  }
})
</script>

<style scoped>
.header {
  color: red;
  /* text-align: left; */
}

.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
