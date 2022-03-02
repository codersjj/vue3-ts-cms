<template>
  <div class="page-search">
    <jj-form v-bind="searchFormConfig" v-model="formData">
      <template v-slot:header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button @click="handleResetClick">
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

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    JjForm
  },
  setup(props) {
    // 这里使用了 ref，而没有使用 reactive 的原因是：在使用 v-model 进行（元素/组件的）双向绑定时 reactive 会有些问题
    // 双向绑定的属性应该是由配置文件中的 field 来决定
    // formData 中的属性应该动态决定
    const formItems = props.searchFormConfig.formItems ?? []
    const formOriginalData: any = {}
    for (const item of formItems) {
      formOriginalData[item.field] = ''
    }
    const formData = ref(formOriginalData)

    // 点击“重置”
    const handleResetClick = () => {
      // 直接给 formData 对象重新赋值影响不到 form.vue 中的内容，修改不掉 form.vue 中的 formData 中的值
      // formData.value = formOriginalData
      // 直接修改 formData 对象中属性的值可以修改掉 form.vue 中浅拷贝出来的 formData 中的值
      for (const key in formOriginalData) {
        formData.value[key] = formOriginalData[key]
      }
    }

    return { formData, handleResetClick }
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
