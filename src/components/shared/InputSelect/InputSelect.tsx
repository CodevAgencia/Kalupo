import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useField } from "formik";
import { useEffect, useState } from "react";
import styles from './InputSelect.module.scss'
import { Label } from "@/components/ui/label";
export interface ItemsSelectProps {
  name: string;
  value: string;
}

interface InputSelectProps {
  placeholder?: string
  theme?: 'default' | 'dark' | 'light'
  items: ItemsSelectProps[],
  name: string;
  onChange?: (value: string) =>void;
  label?: string;
  isDefaultValue?: boolean
}

export const InputSelect:React.FC<InputSelectProps> = ({placeholder, items, theme = 'default', name, onChange, label, isDefaultValue}) => {

  const themes = {
    dark: `bg-gray-dark border-none font-semibold text-white ${styles.darkInput}`,
    light: `bg-gray-input text-gray-light text-sm border-none p-2.5  font-semibold text-base ${styles.lightInput}`,
    default: ''
  }
  const themeContent = {
    dark: `bg-white`,
    light: '',
    default: ''
  }
  const [openSelect, setOpenSelect] = useState(false)

  const [field, meta, helpers] = useField(name)

  useEffect(() => {
    if (onChange && isDefaultValue) onChange(items[0]?.value)
  }, [])

  return (
    <>
      {
        label && <Label className="font-semibold text-black mb-2.5">{label}</Label>
      }
      <Select
        open={openSelect}
        onOpenChange={setOpenSelect}
        value={field.value}
        name={name}
        defaultValue={isDefaultValue ? items[0]?.value : undefined}
        onValueChange={(value) => {
          onChange && onChange(value)
          helpers.setValue(value)
        }}
      >
        <SelectTrigger className={`w-full ${themes[theme]}`}>
            <SelectValue placeholder={placeholder}   />
        </SelectTrigger>
        <SelectContent className={themeContent[theme]}>
          {
            items.map((element,ind) => (
              <SelectItem key={element.value + ind}  className="font-semibold" value={element.value}>{element.name}</SelectItem>
            ))
          }
        </SelectContent>
      </Select>
    </>
  )
}