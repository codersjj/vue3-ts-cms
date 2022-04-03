<template>
  <div class="link-list">
    <template v-for="item of textLinkArr" :key="item.label">
      <div class="item">
        <span class="label">{{ item.label }}：</span>
        <template v-if="item.textAndHrefArr">
          <template
            v-for="(textAndHref, index) in item.textAndHrefArr"
            :key="textAndHref.text"
          >
            <el-link type="primary" :href="textAndHref.href" target="_blank">
              {{ textAndHref.text }}
            </el-link>
            <span v-if="index !== item.textAndHrefArr.length - 1"> + </span>
          </template>
        </template>
        <template v-else>
          <el-link type="primary" :href="item.href" target="_blank">
            {{ item.text }}
          </el-link>
        </template>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

import { ITextLink } from '../types'

defineProps<{
  textLinkArr: ITextLink[]
}>()
</script>

<style scoped lang="less">
.link-list {
  padding: 0 15px;
  margin-bottom: 40px;
  .item {
    position: relative;
    margin: 10px 5px;
    text-align: left;
    .label::before {
      position: absolute;
      top: 40%;
      left: -18px;
      content: '';
      display: inline-block;
      width: 5px;
      height: 5px;
      background-color: #000;
      border-radius: 5px;
    }
  }
}
</style>
