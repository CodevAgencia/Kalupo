import {FilterType} from "@/types/components/card-filter";

export type ProductType = {
  coin: number,
  name: string,
  value: number,
  discount: number,
  image: string
}

export type FiltersSelectedType = {
  pet?: FilterType
  category?: FilterType
  subCategory?: FilterType
  brand?: FilterType
  old?: FilterType
}