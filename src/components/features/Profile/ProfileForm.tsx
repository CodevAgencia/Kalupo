import { FC, useState } from 'react';
import { Formik, ErrorMessage, Form } from 'formik';
import Link from 'next/link';
import * as yup from 'yup';
import { InputText } from '@/components/shared/InputText/InputText';
import { Button } from '@/components/ui/button';
import SelectImg from '@/components/features/Profile/SelectImg';
import { Label } from '@/components/ui/label';
import style from './Profile.module.scss';
import type { ProfileFormProps } from '@/types/components/profile';
import {UserType} from "@/types/user";
import {Edit2} from "lucide-react";

const phoneJson = [
  {
    img: '/assets/icons/Profile/panama.webp',
    value: '+507',
  },
  {
    img: '/assets/icons/Profile/colombia.webp',
    value: '+57',
  },
];

const ProfileForm: FC<ProfileFormProps> = ({ user, theme = 'default' }) => {
  const [form, setForm] = useState<UserType>(user);
  const [addressInput, setAddressInput] = useState<boolean>(true);

  // comment prueba
  const validationSchema = yup.object().shape({
    name: yup.string().required('Nombre completo invalido'),
    email: yup
      .string()
      .email('Correo invalido')
      .required('el correo es obligatorio'),
    address: yup.string().required('direccion no es valida'),
    indicative_phone: yup
      .string()
      .matches(/^\+(507|57)$/, 'El indicativo telefónico debe ser +507 o +57')
      .required('El indicativo telefónico es obligatorio'),
    phone: yup
      .string()
      .matches(
        /^[0-9]{6,14}$/,
        'El número de teléfono debe contener solo dígitos y tener entre 6 y 14 caracteres',
      )
      .required('el telefono es obligatorio'),
  });

  const initialValues: UserType = {
    email: form?.email || '',
    name: form?.name || '',
    last_name: form?.last_name || '',
    indicative_phone: form?.indicative_phone || '',
    coins: form?.coins || 0,
    address: form?.address || '',
    phone: form?.phone || '',
  };

  const handleSubmit = (values: UserType) => {
    console.log(values);
  };

  const handleDisableAddress = () => {
    setAddressInput(prevAddress => !prevAddress);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={`${style.containerForm} w-full h-full`}>
        <section className="font-roboto w-2/3 rounded-lg p-4 flex flex-col gap-2 max-w-2xl shadow-lg">
          <h1 className="font-bold text-blue text-base leading-6 tracking-wider">
            Informacion de tu cuenta
          </h1>

          <InputText
            label={'Nombre y apellido'}
            name="name"
            placeholder="Nombre" {...theme}
          />
          <InputText
            label={'Correo electronico'}
            name="email"
            placeholder="E-mail"
            {...theme}
          />

          <Label htmlFor="address">Dirección</Label>
          <div className="flex flex-row gap-1">
            <InputText
              disableError
              type="text"
              name="address"
              placeholder="Direccion"
              {...theme}
              props={{ disabled: addressInput }}
            />

            <Button
              onClick={handleDisableAddress}
              className="bg-green transform transition-all duration-200 hover:bg-green h-9"
            >
              <Edit2 className="h-4 w-4" />
            </Button>
          </div>
          <ErrorMessage name="address" component="span" />

          <Label htmlFor="phone">Teléfono</Label>
          <SelectImg
            style="w-[80px] h-[35px]"
            options={phoneJson}
            name="Teléfono"
            phone="phone"
            indicative_phone="indicative_phone"
            theme="light"
          />

          <Link
            href="/profile/change-password"
            className="text-blue my-2 font-semibold text-base leading-6 tracking-wider"
          >
            Cambiar contraseña
          </Link>
          <Button
            type="submit"
            className="font-semibold text-base bg-orange-b transform transition-all duration-200 hover:bg-orange-b"
          >
            Guardar
          </Button>
        </section>
      </Form>
    </Formik>
  );
};

export default ProfileForm;
