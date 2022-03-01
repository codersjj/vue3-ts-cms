export interface ITableColumnAttributes {
  prop?: string
  label?: string
  minWidth?: string
  slotName?: string
}

export interface ITable {
  title: string
  attributesList: ITableColumnAttributes[]
  showIndexColumn: boolean
  showSelectionColumn: boolean
}
