import Image from "next/image"
import IconMainColor from '../../../../public/assets/icons/logo-with-color.svg'
import { Formik } from 'formik'
import { InputText } from "../../shared/InputText/InputText"
import  * as yup from 'yup'
import styles from './LoginForm.module.scss'

interface LoginFormProps {
  handleRegister: () => void
}

const LoginForm:React.FC<LoginFormProps> = ({handleRegister}) => {

  const registerValidationSchema = yup.object().shape({
    // username: yup.string().email().required('The username is required'),
    // password: yup.string().min(5, 'Your password is short').max(20, 'Too long!').required('The password is required')
  })

  const initialValues = {
    fullName: '',
    email: '',
    password: '',
    isDog: false,
    isCat: false
  }

  const handleSubmit = () => {

  }

  return (
    <div className={`${styles['form-login']} bg-white text-gray rounded-xl` }>
      <div className='flex flex-col justify-center items-center text-center mb-3'>
        <Image
          src={IconMainColor}
          alt="logo"
          className='w-18 h-18'
        />
        <h2 className="font-bold text-black  text-2xl my-3">¡Bienvenido de nuevo!</h2>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={registerValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form action="" className=''>
            <div className=" flex flex-col gap-2 ">
              <InputText
                name='email'
                placeholder='Correo'
              />
              <InputText
                type='password'
                name='password'
                placeholder='Contraseña'
              />
            </div>
            <div className="my-4">
              <a href="#" className=" text-black font-semibold text-xl" >¿Olvidó su contraseña?</a>
            </div>
            <div className="flex flex-col gap-2">
              <button className='bg-gray p-2.5 rounded-lg h-auto text-white font-semibold text-lg'>Iniciar sesión</button>
              <button onClick={handleRegister} className='bg-white p-2.5 rounded-lg h-auto text-blue border-blue border-2 font-semibold text-lg'>
                ¿Cliente nuevo? Registrate
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>

  )
}

export default LoginForm