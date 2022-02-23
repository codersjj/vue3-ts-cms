<template>
  <div class="user">
    <jj-form v-bind="searchFormConfig" :formData="formData" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import JjForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    JjForm
  },
  setup() {
    const formData = reactive({
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
