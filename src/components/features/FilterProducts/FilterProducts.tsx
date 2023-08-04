import {FC, useEffect, useState} from "react";
import CardFilter from "@/components/features/CardFilter/CardFilter";
import {FiltersSelectedType} from "@/types/products";

const petTypes = [
  {id: 1, value: 'Dog', image: '/assets/images/pet-types/pet_type_dog.svg'},
  {id: 2, value: 'Cat', image: '/assets/images/pet-types/pet_type_cat.svg'},
]

const categorys = [
  {id: 1, value: 'Category one', image: '/assets/images/brands/brand1.png'},
  {id: 2, value: 'Category two', image: '/assets/images/brands/brand2.png'},
  {id: 3, value: 'Category three', image: '/assets/images/brands/brand3.png'},
  {id: 4, value: 'Category three', image: '/assets/images/brands/brand4.png'},
  {id: 5, value: 'Category three', image: '/assets/images/brands/brand5.png'},
  {id: 6, value: 'Category three', image: '/assets/images/brands/brand6.png'},
]
const subCategorys = [
  {id: 1, value: 'Sub Category one'},
  {id: 2, value: 'Sub Category two'},
  {id: 3, value: 'Sub Category three'},
]

const brands = [
  {id: 1, value: 'Brand one'},
  {id: 2, value: 'Brand two'},
  {id: 3, value: 'Brand three'},
]

const olds = [
  {id: 1, value: 'Old one'},
  {id: 2, value: 'Old two'},
  {id: 3, value: 'Old three'},
]

const FilterProducts: FC<{
  className?: string,
  onChange: (selected: FiltersSelectedType) => void,
}> = ({className, onChange}) => {
  const [filters, setFilters] = useState<FiltersSelectedType>(null)

  useEffect(() => {
    onChange(filters)
  }, [filters])

  return (
    <div className={`my-4 flex flex-col gap-2 ${className}`}>
      <CardFilter
        name={'Tipo de mascota'}
        onChange={(selected) => setFilters({...filters, pet_id: selected })}
        filters={petTypes}
      />
      <CardFilter
        name={'Categoria'}
        onChange={(selected) => setFilters({...filters, category_id: selected })}
        filters={categorys}
      />
      <CardFilter
        name={'Sub categoria'}
        onChange={(selected) => setFilters({...filters, sub_category_id: selected })}
        filters={subCategorys}
      />
      <CardFilter
        name={'Marca'}
        onChange={(selected) => setFilters({...filters, brand_id: selected })}
        filters={brands}
      />
      <CardFilter
        name={'Edad'}
        onChange={(selected) => setFilters({...filters, old_id: selected })}
        filters={olds}
      />
    </div>
  )
}

export default FilterProducts