export interface ITableColumnAttributes {
  prop?: string
  label?: string
  width?: string | number
  minWidth?: string
  slotName?: string
}

export interface ITable {
  title: string
  headerHandlers?: IHandlerItem[]
  attributesList: ITableColumnAttributes[]
  treeTableProps?: any
  showIndexColumn?: boolean
  showSelectionColumn?: boolean
  showFooter?: boolean
}

export interface IHandlerItem {
  slotName: string
  permission?: string
}
