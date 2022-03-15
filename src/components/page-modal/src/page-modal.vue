<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      :title="title"
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
          <el-button type="primary" @click="handleConfirmBtnClick"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useStore } from 'vuex'

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
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})
    const title = ref('')

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

    // 点击确定按钮的逻辑
    const store = useStore()
    const handleConfirmBtnClick = () => {
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        console.log('编辑')
        store.dispatch('system/editPageDataItemAction', {
          pageName: props.pageName,
          id: props.defaultInfo.id,
          editData: { ...formData.value }
        })
      } else {
        // 新建
        console.log('新建')
        store.dispatch('system/createPageDataItemAction', {
          pageName: props.pageName,
          newData: { ...formData.value }
        })
      }
      dialogVisible.value = false
    }

    return {
      dialogVisible,
      formData,
      title,
      handleConfirmBtnClick
    }
  }
})
</script>

<style scoped></style>
