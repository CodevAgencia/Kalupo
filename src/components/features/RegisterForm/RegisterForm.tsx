import  * as yup from 'yup'
import Image from "next/image"
import { Formik } from 'formik'
import styles from './RegisterForm.module.scss'
import { InputText } from "@/components/shared/InputText/InputText"
import { CheckBox } from "@/components/shared/CheckBox/CheckBox"

interface RegisterFormProps {
  handleLogin: () => void
}

const RegisterForm:React.FC<RegisterFormProps> = ({handleLogin}) => {

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
    <div className={`${styles['form-register']} bg-white md:mx-0  text-gray rounded-xl`}>
      <div className='flex flex-col justify-center items-center text-center mb-3'>
        <Image
          src={'assets/icons/logo-with-color.svg'}
          alt="logo"
          width={84}
          height={84}
        />
        <h2 className="font-bold text-black text-2xl mt-1">Bienvenido ¡Registrate!</h2>
      </div>
      <div className="flex flex-col text-center gap-2 mb-4">
        <a className='flex justify-center items-center gap-4 bg-white p-2.5 rounded-lg h-auto text-gray border-b-gray border-2 font-semibold text-lg'>
          <Image src={'/assets/icons/logo-google.svg'} width={16} height={16} alt="Google register icon"/>
          Google
        </a>
        <a className='flex justify-center items-center gap-4 bg-gray p-2.5 rounded-lg h-auto text-white font-semibold text-lg'>
          <Image src={'/assets/icons/logo-facebook-gray.svg'} width={12} height={12} alt="Facebook register icon" />
          Facebook
        </a>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={registerValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form action="" className=''>  
            <p className='mb-2 text-black text-xl font-semibold'>Debes completar los siguientes datos</p>
            <div className=" flex flex-col gap-3">
              <InputText
                name='fullName'
                placeholder='Nombre completo'
                theme="light"
              />
              <InputText
                name='email'
                placeholder='Correo'
                theme="light"
              />
              <InputText
                type='password'
                name='password'
                placeholder='Contraseña'
                theme="light"
              />
            </div>
            <div className="mb-4"> 
              <p className='my-4 text-black font-semibold text-xl'>¿Tienes mascota?</p>
              <div className="flex gap-2">
                <CheckBox
                  classContent='items-center'
                  name='isDog'
                  label='Perro'
                  className={styles['checkbox']}
                />
                <CheckBox
                  classContent='items-center'
                  name='isCat'
                  label='Gato'
                  className={styles['checkbox']}
                />
              </div>
            </div>
            <div className="mb-4">
              <CheckBox
                classContent='items-start'
                name='acceptTerms'
                label={<span>Acepto <a className={`text-blue ${styles['accept-terms']}`}>términos y condiciones</a>  y <a className={styles['accept-terms']}>autorizo tratamiento de datos y políticas.</a> </span>}
                className={styles['checkbox-terms']}
              />
            </div>
            <div className="flex flex-col gap-2">
              <button className='bg-blue p-2.5 rounded-lg h-auto text-white font-semibold text-xl'>Continuar</button>
              <button onClick={handleLogin} className='bg-white p-2.5 rounded-lg h-auto text-blue border-blue border-2 font-semibold text-xl'>
                ¿Ya tienes cuenta? Inicia sesión
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterForm