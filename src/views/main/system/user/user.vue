<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetBtnClick"
      @queryBtnClick="handleQueryBtnClick"
    />
    <!-- 注意：这里 ref 前面不需要加冒号（:），如果不是绑定的函数，加了冒号反而会获取不到该组件的引用 -->
    <!-- 这个的话我没有专门儿去注意，但是我的判断的话，他肯定是在解析这个 template 模板的时候，然后发现这个有 ref 属性，然后会专门针对 ref 属性去绑定，就是在 setup 里面定义的 ref 相关的值的。 -->
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      parentName="system"
      pageName="users"
      @editBtnClick="handleEditBtnClick"
    >
      <template #create>
        <el-button type="primary" @click="handleNewBtnClick"
          >新建用户</el-button
        >
      </template>
      <template #audit>
        <el-button type="primary">审核</el-button>
      </template>
      <template #refresh>
        <el-button>
          <el-icon><refresh /></el-icon>
        </el-button>
      </template>

      <template #status="scope">
        <el-button
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          plain
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
    </page-content>
    <!-- modalFormConfigRef 是响应式对象，所以当它发生变化时，组件中的 modalFormConfig 也会进行更新，页面就能展示最新的数据 -->
    <page-modal
      ref="pageModalRef"
      :modalFormConfig="modalFormConfigRef"
      :defaultInfo="defaultInfo"
      pageName="users"
      :title="modalTitle"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, Ref } from 'vue'
import { useStore } from '@/store'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalFormConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'

export default defineComponent({
  name: 'users',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, handleResetBtnClick, handleQueryBtnClick] =
      usePageSearch()

    // ========== 处理密码的逻辑 ==========
    // 属于页面特有的逻辑最好放在页面中，公共的逻辑才写到 hook 中
    const newCallback = (pageModalRef: Ref<any>) => {
      const passwordItem = modalFormConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = false
      // pageModalRef.value.title = '新建用户'
    }
    const editCallback = (pageModalRef: Ref<any>) => {
      const passwordItem = modalFormConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = true
      // pageModalRef.value.title = '编辑用户'
    }
    // page-modal 相关的 hook 逻辑
    const [pageModalRef, defaultInfo, handleNewBtnClick, handleEditBtnClick] =
      usePageModal(newCallback, editCallback)

    // ========== 动态添加部门和角色列表 ==========
    const store = useStore()
    // store.state.allDepartments、store.state.allRoles 发生改变时，computed 的 getter 函数就会重新执行（即 departmentItem、roleItem 对象的内容会被更新，因此 modalFormConfig 的内容就被更新了），拿到最新的 modalFormConfig
    const modalFormConfigRef = computed(() => {
      const departmentItem = modalFormConfig.formItems.find(
        (item) => item.field === 'departmentId'
      )
      departmentItem!.options = store.state.allDepartments.map((item) => ({
        value: item.id,
        text: item.name
      }))
      const roleItem = modalFormConfig.formItems.find(
        (item) => item.field === 'roleId'
      )
      roleItem!.options = store.state.allRoles.map((item) => ({
        value: item.id,
        text: item.name
      }))

      return modalFormConfig
    })

    const modalTitle = computed(() =>
      Object.keys((defaultInfo as Ref<any>).value).length
        ? '编辑用户'
        : '新建用户'
    )

    return {
      searchFormConfig,
      contentTableConfig,
      modalFormConfigRef,
      pageContentRef,
      pageModalRef,
      defaultInfo,
      modalTitle,
      handleResetBtnClick,
      handleQueryBtnClick,
      handleNewBtnClick,
      handleEditBtnClick
    }
  }
})
</script>

<style scoped></style>
