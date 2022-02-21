<template>
  <div class="user">
    <div class="search">
      <jj-form v-bind="formConfig" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import JjForm, { IForm } from '@/base-ui/form'

export default defineComponent({
  name: 'user',
  components: {
    JjForm
  },
  setup() {
    const formConfig: IForm = {
      formItems: [
        {
          type: 'input',
          label: 'id',
          placeholder: '请输入id'
        },
        {
          type: 'input',
          label: '用户名',
          placeholder: '请输入用户名'
        },
        {
          type: 'password',
          label: '密码',
          placeholder: '请输入密码'
        },
        {
          type: 'select',
          label: '喜欢的运动',
          placeholder: '请选择喜欢的运动',
          options: [
            { value: 'basketball', text: '篮球' },
            { value: 'football', text: '足球' },
            { value: 'swimming', text: '游泳' }
          ]
        },
        {
          type: 'datepicker',
          label: '创建时间',
          otherOptions: {
            type: 'daterange',
            startPlaceholder: '开始时间',
            endPlaceholder: '结束时间'
          }
        }
      ],
      labelWidth: '120px',
      itemStyle: {
        padding: '20px 50px'
      },
      colLayout: {
        span: 8
      }
    }

    return { formConfig }
  }
})
</script>

<style scoped></style>
