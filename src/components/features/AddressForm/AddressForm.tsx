import { InputSelect, ItemsSelectProps } from '@/components/shared/InputSelect/InputSelect';
import styles from './AddessForm.module.scss'
import { InputText } from '@/components/shared/InputText/InputText';
import { Formik } from 'formik';
import { Popover, Close } from '@radix-ui/react-popover';
import { boolean } from 'yup';

interface AddressFormProps {
  itemsAddress: any[]
}

const AddressForm: React.FC<AddressFormProps> = ({ itemsAddress }) => {

  const initialValues = {
    city: 'Bogota',
    'address-one': '',
    'address-two': '',
    'address-three': '',
    'floor': ''
  }

  const handleSubmit = () => {

  }

  return (
    <div className={`bg-blue p-4 lg:p-7 rounded-3xl ${styles.address_form}`}>
      <div className="mb-2">
        <p className="text-xl font-bold text-white">Agregar dirección de entrega</p>
        <p className="text-base my-1 text-white">Ingresa tu dirección para mostrarte los productos disponibles en tu área</p>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, values, setFieldValue }) => (

          <form action="">

            <div className="mb-2">
              <InputSelect
                name='city'
                theme='dark'
                placeholder='Selecciona la ciudad'
                items={[
                  {
                    name: 'Bogota',
                    value: 'Bogota'
                  },
                  {
                    name: 'Neiva',
                    value: 'Neiva'
                  },
                  {
                    name: 'Medellin',
                    value: 'Medellin'
                  }
                ]}
              />
            </div>
            <div className="mb-2">
              <Close className="PopoverClose" aria-label="Close" asChild>
                <InputSelect
                  name='address'
                  placeholder='Dirección (calle, carrera etc'
                  isDefaultValue
                  items={itemsAddress
                    .filter((item, index, self) => (index === self.findIndex((t) => (
                      t.formatted_address === item.formatted_address
                    ))
                    )).map((item) => ({
                      name: item.formatted_address,
                      value: item.formatted_address
                    }))}
                  onChange={(value) => {
                    const find = itemsAddress.find(el => (el.formatted_address === value))
                    if (find) {
                      try {
                        setFieldValue('address-one', find.address_components[1].short_name)
                        setFieldValue('address-two', find.address_components[0].short_name)
                        setFieldValue('address-three', find.address_components[2].short_name)
                      } catch {

                      }
                    }
                  }}
                />
              </Close>
            </div>
            <div className="flex gap-2 mb-2 text-white">
              <div className="">
                <InputText
                  name='address-one'
                  placeholder='Text'
                  className='p-2'
                />
              </div>
              <div className="flex items-center">
                <span className='mr-2 font-bold'>#</span>
                <InputText
                  name='address-two'
                  placeholder='Text'
                  className='p-2'
                />
              </div>
              <div className="flex items-center">
                <span className='mr-2 font-bold '>-</span>
                <InputText
                  name='address-three'
                  placeholder='Text'
                  className='p-2'
                />
              </div>
            </div>
            <div className="">
              <div className="mb-2">
                <InputText
                  name='floor'
                  className='p-2 text-base'
                  placeholder='Apt / piso / casa'
                />
              </div>
              <button className="bg-orange-b text-white w-full rounded-lg p-2.5">Agregar dirección</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default AddressForm