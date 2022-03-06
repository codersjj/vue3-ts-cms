export interface ITableColumnAttributes {
  prop?: string
  label?: string
  width?: string | number
  minWidth?: string
  slotName?: string
}

export interface ITable {
  title: string
  attributesList: ITableColumnAttributes[]
  treeTableProps?: any
  showIndexColumn?: boolean
  showSelectionColumn?: boolean
  showFooter?: boolean
}
