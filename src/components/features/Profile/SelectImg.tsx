import { FC } from 'react';
import { useField } from 'formik';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import styles from './Profile.module.scss';
import { InputText } from '@/components/shared/InputText/InputText';
import type { OptionType, PropsSelectImg } from '@/types/components/profile';

const SelectImg: FC<PropsSelectImg> = ({
  name,
  phone,
  indicative_phone,
  options,
  style,
}) => {
  const [, meta] = useField(phone);
  const [fieldInPhone, metaInPhone, helpersInPhone] =
    useField(indicative_phone);
  const selectedOption = options.find(
    option => option.value === fieldInPhone.value,
  );

  const handleIndicativePhone = (value: string) => {
    helpersInPhone.setValue(value);
  };

  return (
    <section className={`${styles['SelectImg']} flex flex-col`}>
      <section className="w-full flex flex-row gap-3">
        <Select
          key={name}
          value={fieldInPhone.value}
          onValueChange={handleIndicativePhone}
        >
          <SelectTrigger className={`${style}`}>
            <SelectValue>
              <Image
                src={selectedOption ? selectedOption.img : options[0].img}
                alt={selectedOption ? selectedOption.value : options[0].value}
                width={20}
                height={10}
                className="w-full flex justify-center"
              />
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="w-[87px]">
              <SelectLabel>{name}</SelectLabel>
              {options.map(({ img, value }: OptionType) => (
                <SelectItem
                  key={value}
                  value={value}
                  className="flex justify-center items-center"
                >
                  <Image
                    src={img}
                    alt={value}
                    width={20}
                    height={10}
                    className="w-full flex justify-center items-center"
                  />
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <p
          className={`flex items-center justify-center rounded-[10px] min-w-[50px] font-semibold text-sm leading-5 tracking-wider text-primary`}
        >
          {fieldInPhone.value || options[0].value}
        </p>

        <InputText name={phone} placeholder="telefono" disableError />
      </section>

      {meta.error && <span>{meta.error}</span>}
      {metaInPhone.error && <span>{metaInPhone.error}</span>}
    </section>
  );
};

export default SelectImg;
