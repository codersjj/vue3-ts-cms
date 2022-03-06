import { ITable } from '@/base-ui/table'

export const contentTableConfig: ITable = {
  title: '菜单列表',
  attributesList: [
    { prop: 'name', label: '菜单名称', minWidth: '100' },
    { prop: 'type', label: '类型', minWidth: '100' },
    { prop: 'url', label: '菜单路径', minWidth: '100' },
    { prop: 'icon', label: '菜单图标', minWidth: '100' },
    { prop: 'permission', label: '按钮权限', minWidth: '100' },
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
  treeTableProps: {
    rowKey: 'id',
    treeProps: { children: 'children' }
  },
  showFooter: false
}
