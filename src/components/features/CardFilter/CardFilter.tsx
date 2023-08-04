import {FC, ReactNode, useState} from "react";
import {CardFilterPropsType, FilterType} from "@/types/components/card-filter";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import SimpleCheckBox from "@/components/shared/SimpleCheckbox/SimpleCheckBox";
import Avatar from "@/components/ui/avatar";
const CardFilter: FC<CardFilterPropsType> = ({
  name,
  filters,
  onChange,
}) => {

  const [selectedFilter, setFilter] = useState<FilterType>()

  const onHandleChange = (filter: FilterType) => {
    let newValue = null
    if (selectedFilter?.id !== filter.id) {
      newValue = filter
    }
    onChange(newValue)
    setFilter(newValue)
  }
  const ItemFilter = (filter: FilterType): ReactNode => {
    return filter.image ?
      <div className={'flex flex-col text-truncate justify-between justify-items-stretch gap-2'} key={filter.value}>
        <Avatar
          onClick={() => onHandleChange(filter)}
          src={filter.image}
          alt={filter.value}
          className={`border-2 h-16 w-16 ${selectedFilter?.id === filter.id ? 'border-primary' : 'border-secondary'}`}
        />
        <p className={'max-w-md m-0 font-semibold text-center text-sm p-0'}>
          {filter.value}
        </p>
      </div>
      :
      <SimpleCheckBox
        key={filter.value}
        text={filter.value}
        checked={selectedFilter?.id === filter.id}
        onChange={() => onHandleChange(filter)}
      />
  }

  return (
    <Card className={'border-0 shadow-lg'}>
      <CardHeader className={'py-2 pt-3 font-normal min-w-md max-w-md'}>
        <h3 className={'text-base font-normal truncate'}>{name} / <span className={'text-primary font-semibold'}>{selectedFilter?.value}</span></h3>
      </CardHeader>
      <CardContent>
        <div className={"flex flex-wrap justify-center gap-2"}>
          { filters.map((filter) => <ItemFilter key={filter.id} {...filter} /> )}
        </div>
      </CardContent>
    </Card>
  )
}

export default CardFilter;