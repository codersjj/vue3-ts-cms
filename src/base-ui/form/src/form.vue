<template>
  <div class="jj-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
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
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
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
    // 注意：这里浅拷贝了一份 props.modelValue 对象，而不是直接引用 props.modelValue 对象，否则绑定的其实还是父组件中的那个对象，跟双向绑定就没有关系了，并且这样做到时候还是直接修改的这个父组件中对象的内容，这又违反了单向数据流的原则
    // 当然，如果 formData 的属性还是引用类型，这里就不能用浅拷贝了，而是需要使用深拷贝了。
    // 因为这里使用 ... 进行了浅拷贝，那么之后 formData 对原来的 props.modelValue 相当于就没有依赖了，所以对 props.modelValue 做整体改变不会对 formData 产生影响，即 formData 的值不会改变，所以表单中的内容也就不会改变
    const formData = ref({ ...props.modelValue })

    // 使用 watch 自己来监听 formData 数据的改变，当数据发生改变时，通过 emit() 发送出去，这样就真正实现了双向绑定，而不是之前那样（方案一和方案二）通过引用修改
    watch(
      formData,
      (newValue) => {
        console.log(
          '🚀 ~ file: form.vue ~ line 97 ~ setup ~ newValue',
          newValue
        )
        emit('update:modelValue', newValue)
      },
      {
        // 因为表单中 v-model 绑定的是 formData 中的某个属性，即修改的是 formData 中的属性，而不是直接修改的 formData，所以需要开启深度监听
        deep: true
      }
    )

    return { formData }
  }
})
</script>

<style scoped lang="less">
.jj-form {
  padding-top: 18px;
}
</style>
