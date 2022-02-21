<template>
  <div class="user">
    <div class="search">
      <jj-form
        :formItems="formItems"
        :labelWidth="labelWidth"
        :itemStyle="itemStyle"
        :colLayout="colLayout"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import JjForm, { IFormItem } from '@/base-ui/form'

export default defineComponent({
  name: 'user',
  components: {
    JjForm
  },
  setup() {
    const formItems: IFormItem[] = [
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
    ]

    const labelWidth = '120px'

    const itemStyle = {
      padding: '20px 50px'
    }

    const colLayout = {
      span: 8
    }

    return {
      formItems,
      labelWidth,
      itemStyle,
      colLayout
    }
  }
})
</script>

<style scoped></style>
