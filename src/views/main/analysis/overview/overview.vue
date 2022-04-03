<template>
  <div class="overview">
    <jj-card title="关于">
      <div class="c-left">
        Vue3Admin 是基于 Vue3、Vue Router、Vuex、Element
        Plus、TypeScript、Webpack、ECharts 5 等构建开发的后台系统解决方案
      </div>
    </jj-card>
    <jj-card title="技术栈">
      <jj-link-list :textLinkArr="technologyStack"></jj-link-list>
      <jj-descriptions
        title="生产环境依赖："
        :column="2"
        :descriptions-data="dependencies"
        label-class-name="item-label"
        class-name="item-content"
      ></jj-descriptions>
      <jj-descriptions
        title="开发环境依赖："
        :column="2"
        :descriptions-data="devDependencies"
        label-class-name="item-label"
        class-name="item-content"
      ></jj-descriptions>
    </jj-card>
    <jj-card title="项目结构">
      <jj-code language="bash" :code="projectStructure"></jj-code>
    </jj-card>
    <jj-card title="项目规范">
      <jj-descriptions
        title="文件命名规范："
        :descriptions-data="fileNamingSpecification"
      />
      <jj-descriptions
        title="组件编写规范："
        :descriptions-data="componentSpecification"
      />
    </jj-card>
    <jj-card title="Git 提交规范">
      <jj-descriptions
        :descriptions-data="gitCommitSpecification"
      ></jj-descriptions>
    </jj-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import JjCard from '@/base-ui/card'
import JjLinkList from '@/base-ui/link-list'
import JjDescriptions from '@/base-ui/descriptions'
import JjCode from '@/base-ui/code'

import {
  technologyStack,
  dependencies,
  devDependencies,
  projectStructure,
  fileNamingSpecification,
  componentSpecification,
  gitCommitSpecification
} from './config'

export default defineComponent({
  name: 'overview',
  components: {
    JjCard,
    JjLinkList,
    JjDescriptions,
    JjCode
  },
  setup() {
    return {
      technologyStack,
      dependencies,
      devDependencies,
      projectStructure,
      fileNamingSpecification,
      componentSpecification,
      gitCommitSpecification
    }
  }
})
</script>

<style scoped lang="less">
.overview {
  .jj-card {
    margin-bottom: 20px;
    :deep(.el-card__header span) {
      font-weight: 700;
    }
    .c-left {
      text-align: left;
      margin-bottom: -18px;
    }
    .descriptions {
      :deep(.el-descriptions__title) {
        font-weight: 400;
      }
      :deep(.item-label) {
        width: 200px;
      }
      :deep(.item-content) {
        width: 200px;
      }
    }
    .code {
      text-align: left;
      background: #f0f0f0;
    }
  }
}
</style>
