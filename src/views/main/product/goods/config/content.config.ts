import { ITable } from '@/base-ui/table'

export const contentTableConfig: ITable = {
  title: '商品列表',
  attributesList: [
    {
      prop: 'name',
      label: '商品名称',
      width: '300',
      minWidth: '100'
    },
    {
      prop: 'oldPrice',
      label: '原价',
      minWidth: '100',
      slotName: 'oldPriceSlot'
    },
    {
      prop: 'newPrice',
      label: '现价',
      minWidth: '100',
      slotName: 'newPrice'
    },
    {
      prop: 'status',
      label: '状态',
      minWidth: '100',
      slotName: 'status'
    },
    {
      prop: 'imgUrl',
      label: '商品图片',
      minWidth: '100',
      slotName: 'image'
    },
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
    {
      label: '操作',
      minWidth: '120',
      slotName: 'operation'
    }
  ],
  showIndexColumn: true,
  showSelectionColumn: true
}
