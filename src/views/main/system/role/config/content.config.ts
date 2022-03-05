import { ITable } from '@/base-ui/table'

export const contentTableConfig: ITable = {
  title: '角色列表',
  attributesList: [
    { prop: 'name', label: '角色名称', minWidth: '100' },
    { prop: 'intro', label: '权限介绍', minWidth: '100' },
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
