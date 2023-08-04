import {FC, useEffect, useState} from "react";
import { Checkbox } from "@/components/ui/checkbox"


type SimpleCheckBoxProps = {
  checked?: boolean,
  text: string,
  subText?: string,
  onChange: (check: boolean) => void,
}

const SimpleCheckBox: FC<SimpleCheckBoxProps> = ({name, checked = false, text, onChange, subText}) => {

  const [check, checking] = useState<boolean>(false);

  useEffect(() => {
    if (checked) checking(true)
  }, [checked])

  const handleChecking = (checked) => {
    checking(checked)
    onChange(checked)
  }

  return (
    <div className="items-top flex space-x-2">
      <Checkbox
        id={name}
        checked={check}
        onCheckedChange={(checked) =>  handleChecking(checked)}
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={name}
          className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {text}
        </label>
        {
          subText &&
          <p className="text-sm text-muted-foreground">
            {subText}
          </p>
        }
      </div>
    </div>
  )
}

export default SimpleCheckBox