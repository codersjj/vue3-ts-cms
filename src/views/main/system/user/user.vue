<template>
  <div class="user">
    <jj-form v-bind="searchFormConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import JjForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    JjForm
  },
  setup() {
    return { searchFormConfig }
  }
})
</script>

<style scoped></style>
