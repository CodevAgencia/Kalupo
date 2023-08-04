export type CardFilterPropsType = {
  name: string,
  onChange: (selected: FilterType) => void,
  filters: FilterType[]
}

export type FilterType = {
  image?: string,
  value: string
  id: number,
}