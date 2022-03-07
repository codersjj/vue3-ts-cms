import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetBtnClick = () => {
    // pageContentRef.value 没有值时不会调用 getPageData() 方法
    pageContentRef.value?.getPageData({}, true)
  }
  const handleQueryBtnClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo, true)
  }
  // 可以看成是元组
  return [pageContentRef, handleResetBtnClick, handleQueryBtnClick]
}
