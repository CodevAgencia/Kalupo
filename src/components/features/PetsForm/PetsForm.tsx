import React, {FC} from "react";
import  * as yup from 'yup'
import {Card, CardContent} from "@/components/ui/card";
import {InputText} from "@/components/shared/InputText/InputText";
import {InputCalendar} from "@/components/shared/InputCalendar/InputCalendar";
import {InputSelect} from "@/components/shared/InputSelect/InputSelect";
import {Button} from "@/components/ui/button";
import {Formik} from "formik";
interface PetsFormProps {
  setIdPet: (value?:number) => void
  idPet?: number
}

const PetsForm: FC<PetsFormProps> = ({setIdPet, idPet}) => {

  const registerValidationSchema = yup.object().shape({})

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
    <Card className={'shadow-md'}>
      <CardContent>
        <Formik
          initialValues={initialValues}
          validationSchema={registerValidationSchema}
          onSubmit={handleSubmit}
        >
          <form action="" className={'flex flex-col gap-2'}>
            <InputText
              name='name'
              label='Nombre de tu peludo'
              placeholder='Nombre'
            />
            <InputCalendar
              name='birthdate'
              label='Fecha de nacimiento'
              placeholder='Fecha'
            />
            <InputSelect
              label='Raza'
              placeholder='Seleccione'
              name='size'
              items={[
                {
                  name: 'Golden retriever',
                  value: 'Golden retriever'
                },
                {
                  name: 'Pequeño',
                  value: 'Pequeño'
                }
              ]}
            />
            <InputSelect
              label='Genero'
              placeholder='Seleccione'
              name='size'
              items={[
                {
                  name: 'Macho',
                  value: 'Macho'
                },
                {
                  name: 'Hembra',
                  value: 'Hembra'
                }
              ]}
            />
            <InputSelect
              label='Tamaño'
              placeholder='Mediano / Grande'
              name='size'
              items={[
                {
                  name: 'Grande',
                  value: 'Grande'
                },
                {
                  name: 'Pequeño',
                  value: 'Pequeño'
                }
              ]}
            />
            <InputText
              name='name'
              placeholder='Peso'
              label='Peso aproximado (KG)'
            />
            <InputText
              name='name'
              placeholder='Chip'
              label='Chip de identificación'
            />
            <div className="">
              <div className="flex flex-col gap-2 mt-4">
                <Button className='bg-gray font-semibold hover:bg-gray-light'>
                  Ver carnet de vacunación
                </Button>
                <Button className='bg-gray font-semibold hover:bg-gray-light'>
                  Ultimo control parasitos externos
                </Button>
                <Button className='bg-gray font-semibold hover:bg-gray-light'>
                  Ultima vacunación
                </Button>
                <Button className='bg-gray font-semibold hover:bg-gray-light'>
                  Ultima desparacitación
                </Button>
                <Button className='bg-gray font-semibold hover:bg-gray-light'>
                  Ver historial medico
                </Button>
              </div>
              <div className="flex flex-col gap-2  mt-4">
                <Button className='bg-gray font-semibold hover:bg-gray-light'>
                  <span>Agregar foto</span>
                  <img className='ml-2' src="/assets/icons/camera-icon.svg" alt="icon-history" width={24} />
                </Button>
                <Button className='bg-gray font-semibold hover:bg-gray-light'>
                  <span>Agregar carnet de vacunación</span>
                  <img className='ml-2'  src="/assets/icons/history-book.svg" alt="icon-history" width={24} />
                </Button>
                <Button className='bg-gray font-semibold hover:bg-gray-light'>
                  <span>Agregar historial medico </span>
                  <img className='ml-2'  src="/assets/icons/history-book.svg" alt="icon-history" width={24} />
                </Button>
              </div>
              <div className="mt-10 ">
                <Button className='bg-orange font-semibold w-full hover:bg-orange'>
                  Guardar mascota
                </Button>
              </div>
              {
                idPet && <div className="mt-2">
                      <Button type='button' className='bg-white font-semibold text-black' onClick={() => setIdPet()}>
                          + Agregar otra mascota
                      </Button>
                  </div>
              }
            </div>
          </form>
        </Formik>
      </CardContent>
    </Card>
  )
}

export default PetsForm;