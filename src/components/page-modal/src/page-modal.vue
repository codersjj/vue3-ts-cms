<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
      center
      destroy-on-close
    >
      <!-- 使用 el-dialog 中的默认插槽 -->
      <!-- <span>待补充的内容</span> -->

      <jj-form v-model="formData" v-bind="modalFormConfig"></jj-form>

      <!-- 使用 el-dialog 中名为 footer 的插槽 -->
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

import JjForm from '@/base-ui/form'

export default defineComponent({
  name: 'PageModal',
  components: {
    JjForm
  },
  props: {
    modalFormConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newValue) => {
        console.log(
          '🚀 ~ file: page-modal.vue ~ line 53 ~ watch ~ newValue',
          newValue
        )
        for (const item of props.modalFormConfig.formItems) {
          formData.value[item.field] = newValue[item.field]
        }
      }
    )

    return {
      dialogVisible,
      formData
    }
  }
})
</script>

<style scoped></style>
