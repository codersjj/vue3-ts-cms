import { useStore } from '@/store'

export function usePermission(pageName: string, handleName: string) {
  const store = useStore()

  const permissions = [...store.state.login.permissions]
  // console.log(
  //   '🚀 ~ file: usePermission.ts ~ line 7 ~ usePermission ~ permissions',
  //   permissions
  // )
  // // 测试
  // permissions.splice(1, 1)
  // console.log(
  //   '🚀 ~ file: usePermission.ts ~ line 12 ~ usePermission ~ permissions',
  //   permissions
  // )
  const targetPermission = `system:${pageName}:${handleName}`
  // name = "coderzhj"
  // !name => false
  // !!name => true
  return !!permissions.find(
    (permission: any) => permission === targetPermission
  )
}
