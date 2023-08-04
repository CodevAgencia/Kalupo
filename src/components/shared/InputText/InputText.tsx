import { Input } from '@/components/ui/input';
import { useField } from 'formik';
import React, {FC} from "react";
import {Label} from "@/components/ui/label";
interface InputTextProps {
  name: string;
  placeholder?: string;
  type?: string;
  className?: string;
  label?: string;

  // disableError to disable error message
  disableError?: boolean;
  props?: Record<string, any>;
}

export const InputText: FC<InputTextProps> = ({
  name,
  placeholder,
  type = 'text',
  className,
  label,
  disableError = false,
  props,
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      { label ? <Label htmlFor={name}>{label}</Label> : null}
      <Input
        name={name}
        className={`
          ${className}
          rounded-lg h-max focus:ring-blue-500 focus:border-blue-200 block w-full dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500
        `}
        type={type}
        value={field.value}
        onChange={value => helpers.setValue(value.target.value)}
        placeholder={placeholder}
        {...props}
      />
      {!disableError && meta.error && <span>{meta.error}</span>}
    </>
  );
};
