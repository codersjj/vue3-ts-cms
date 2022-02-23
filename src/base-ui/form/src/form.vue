<template>
  <div class="jj-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                  v-model="formData[item.field]"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[item.field]"
                >
                  <el-option
                    v-for="option in item.options"
                    :value="option.value"
                    :key="option.value"
                    >{{ option.text }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[item.field]"
                ></el-date-picker>
              </template>
              <!-- 其它类型 -->
              <!-- ... -->
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      // 注意，这里在写函数时要写成箭头函数，详解文档：https://vuejs.org/guide/typescript/options-api.html#caveats
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xs: 24,
        sm: 24,
        md: 12,
        lg: 8,
        xl: 6 // ≥1920px 每行显示 24/6 = 4 个
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const formData = computed({
      get: () => props.modelValue,
      // 如果模板中的 v-model 绑定的是 formData 的某个属性，当这个属性发生改变的时候，set 方法是不会被调用的
      // 所以这里的 set 方法不会被调用，因此里面的 emit() 也没有执行，即 update:modelValue 事件没有成功发送给父组件
      // 但父组件却还是成功拿到了子组件表单中的输入内容，这是因为这里 formData 实际上还是拿到的 computed 的 get 返回的 props.modelValue 的引用，之后相当于还是把 props 的 modelValue 绑定到了模板中的 v-model 上，也就是说子组件中修改的其实还是父组件的 formData 对象。依然违背了单向数据流的设计原则。
      // 因此，这里的 computed 相当于只设置了一个 getter，而没有 setter，这就意味着父组件中使用的 v-model="formData" 其实就相当于 :modelValue="formData" 了，也就是说并没有实现数据的双向绑定
      set: (newValue) => {
        console.log(
          '🚀 ~ file: form.vue ~ line 92 ~ setup ~ newValue',
          newValue
        )
        emit('update:modelValue', newValue)
      }
    })

    return { formData }
  }
})
</script>

<style scoped lang="less">
.jj-form {
  padding-top: 18px;
}
</style>
