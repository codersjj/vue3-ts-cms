<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  props: {
    test_name: {
      type: String
    }
  },
  setup(props) {
    // setup 中的 props 可以通过 defineComponent() 内部的泛型推导出我们上面 props 中的定义的 test_name，并给出代码提示
    props.test_name
  }
})
</script>

<style lang="less"></style>
