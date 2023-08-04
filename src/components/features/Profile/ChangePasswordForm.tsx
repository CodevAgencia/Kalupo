import { Form, Formik } from 'formik';
import { FC } from 'react';
import * as yup from 'yup';
import styled from './Profile.module.scss';
import { InputText } from '@/components/shared/InputText/InputText';
import { Button } from '@/components/ui/button';
import type {
  ChangePasswordFormProps,
  FormValuesChangePassword,
} from '@/types/components/profile';
import {ArrowLeft} from "lucide-react";
import {useRouter} from "next/router";

const ChangePasswordForm: FC<ChangePasswordFormProps> = ({ id }) => {
  const router = useRouter()
  const initialValues: FormValuesChangePassword = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const validationSchema = yup.object().shape({
    currentPassword: yup.string().required('Introduzca su contraseña actual'),
    newPassword: yup
      .string()
      .required('Introduzca una nueva contraseña')
      .min(8, 'La contraseña debe tener al menos 8 caracteres'),
    confirmPassword: yup
      .string()
      .required('Confirme su nueva contraseña')
      .oneOf([yup.ref('newPassword')], 'Las contraseñas no coinciden'),
  });
  const handleSubmit = (values: FormValuesChangePassword) => {};
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form
        className={`${styled.ChangePasswordForm} w-full max-w-md rounded-xl shadow-lg p-6`}
      >
        <section className="w-full max-w-sm flex flex-col gap-2">
          <div className={'flex flex-wrap content-center items-center text-blue'}>
            <Button variant={'link'} onClick={router.back} className={'p-1'} size={'sm'}>
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <h1 className="font-bold text-base tracking-wider m-0">
              Informacion de tu cuenta
            </h1>
          </div>
          <InputText
            label={'Contraseña Actual'}
            name="currentPassword"
            placeholder="Actual"
          />
          <InputText
            label={'Nueva contraseña'}
            name="newPassword"
            placeholder="Contraseña"
          />
          <InputText
            label={'Confirmar contraseña'}
            name="confirmPassword"
            placeholder="Confirmar Contraseña"
          />

          <Button
            type="submit"
            className="w-full bg-orange-b hover:bg-orange-b font-roboto font-bold text-base leading-6 tracking-wide my-3"
          >
            Actualizar contraseña
          </Button>
        </section>
      </Form>
    </Formik>
  );
};

export default ChangePasswordForm;
