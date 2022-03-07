import { ITable } from '@/base-ui/table'

export const contentTableConfig: ITable = {
  title: '用户列表',
  headerHandlers: [
    {
      slotName: 'create',
      // 大小写字母开头都可以
      permission: 'create'
    },
    {
      slotName: 'audit',
      permission: 'audit'
    },
    {
      slotName: 'refresh'
    }
  ],
  attributesList: [
    { prop: 'name', label: '姓名', minWidth: '100' },
    { prop: 'realname', label: '真实姓名', minWidth: '100' },
    { prop: 'cellphone', label: '手机号', minWidth: '100' },
    { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '230',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '230',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotName: 'operation' }
  ],
  showIndexColumn: true,
  showSelectionColumn: true
}
