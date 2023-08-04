import styles from './InputCalendar.module.scss'
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { useField } from "formik"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@/components/ui/label"

interface InputCalendarProps {
  placeholder?: string
  label?: string;
  theme?: 'default' | 'light' | 'dark',
  name: string
}

export const InputCalendar:React.FC<InputCalendarProps> = ({placeholder,name, label, theme = 'default'}) => {
  const [field, meta, helpers] = useField(name)

  const themes = {
    dark: '',
    light: `bg-gray-input text-gray-light text-sm border-none p-2.5  font-semibold text-base ${styles.lightInput}`,
    default: ''
  }

  return (
    <>
      {
        label && <Label className="font-semibold text-black mb-2.5">{label}</Label>
      }
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-base",
              `${themes[theme]}`,
              !field.value && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {field.value ? format(field.value, "PPP") : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={helpers.setValue}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </>
    
  )
}