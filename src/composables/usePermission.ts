import { useStore } from '@/store'

export function usePermission(pageName: string, handleName: string) {
  const store = useStore()

  const permissions = [...store.state.login.permissions]
  const targetPermission = `system:${pageName}:${handleName}`
  // name = "coderzhj"
  // !name => false
  // !!name => true
  return !!permissions.find(
    (permission: any) => permission === targetPermission
  )
}
