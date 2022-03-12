import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackFn = () => void

export function usePageModal(
  newClickCb?: CallbackFn,
  editClickCb?: CallbackFn
) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()

  const defaultInfo = ref({})

  const handleNewBtnClick = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    // 点击新建按钮时执行页面中传进来的函数
    newClickCb?.()
  }

  const handleEditBtnClick = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    // 点击编辑按钮时执行页面中传进来的函数
    editClickCb?.()
  }

  return [pageModalRef, defaultInfo, handleNewBtnClick, handleEditBtnClick]
}
