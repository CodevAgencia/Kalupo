import { useField } from "formik"

interface CheckBoxProps {
  name:string
  label?: string | React.ReactNode,
  type?: string
  classContent?: string
  className?: string
}
export const CheckBox:React.FC<CheckBoxProps> = ({name, label, type = 'text', className, classContent}) => {
  const [field, meta, helpers] = useField(name)

  const classDefaultInput = 'w-4  h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
  return (
    <div className={`flex ${classContent}`}>
      <input
        checked={field.value}
        type="checkbox"
        name={name}
        value={field.value}
        onChange={value => helpers.setValue(value.target.checked)}
        className={`${classDefaultInput} ${className}`}
      />
      <label
        htmlFor="checked-checkbox"
        className="ml-2 text-black font-semibold text-xl"
      >
        {label}
      </label>
    </div>
  )
}