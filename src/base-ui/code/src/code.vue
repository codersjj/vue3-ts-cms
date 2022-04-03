<template>
  <div class="code">
    <pre>
      <code :class="'language-' + language" v-html="highlightedCode"></code>
    </pre>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

const props = withDefaults(
  defineProps<{
    language?: string
    code?: string
  }>(),
  {
    language: 'plaintext',
    code: ''
  }
)

const highlightedCode = hljs.highlight(props.code, {
  language: props.language
}).value
</script>

<style scoped></style>
