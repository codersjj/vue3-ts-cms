<template>
  <div class="user">
    <jj-form v-bind="searchFormConfig" v-model="formData" />
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

<style scoped></style>
