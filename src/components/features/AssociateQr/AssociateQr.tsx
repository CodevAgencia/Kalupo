import { TabsWithTitle } from '@/components/shared/TabsWithTitle/TabsWithTitle'
import styles from './AssociateQr.module.scss'
import { useState } from 'react'
import {CarInfoBlue} from '@/components/shared/CardInfoBlue/CardInfoBlue'
import { Button } from '@/components/ui/button'


const CardData = [
  {
    icon: '/assets/icons/cpu.svg',
    name: 'QR TOBBY (Gato)',
    subtitle: (
      <>
        <p>Creado el 20 Febrero / 9:00 am</p>
        <p>Codigo: RR14****</p>
      </>
    )
  },
  {
    icon: '/assets/icons/cpu.svg',
    name: 'QR PELOS (GATO)',
    subtitle: (
      <>
        <p>Creado el 20 Febrero / 9:00 am</p>
        <p>Codigo: RR14****</p>
      </>
    )
  },
  {
    icon: '/assets/icons/cpu.svg',
    name: 'QR TATOS (GATO)',
    subtitle: (
      <>
        <p>Creado el 20 Febrero / 9:00 am</p>
        <p>Codigo: RR14****</p>
      </>
    )
  }
]

interface AssociateQRProps {

}

export const AssociateQR = () => {
  const [tabActive, setTabActive] = useState(0)

  return (
    <div className={`bg-white p-4 pb-8 rounded-3xl ${styles.associateQr}`}>
      <div>
        <div className="mb-11">
          <TabsWithTitle
            className="justify-center "
            tabActive={tabActive}
            setTabActive={setTabActive}
            title=''
            classNameItems="flex-col lg:flex-row"
            tabs={[
              'Asociar QR',
              'Listado de QR',
              'Alertas de QRs'
            ]}
          />
        </div>
        <div className="mt mb-5 lg:px-4">
          <h3 className='text-black font-bold'>Historico de QR Asociados</h3>
        </div>
        <div className="lg:px-4 flex flex-col gap-4 mb-9">
          {
            CardData.map((item, idx) => (
              <CarInfoBlue
                key={'card-info-blue' + idx}
                imageUri='/assets/icons/cpu.svg'
                title='QR TOBBY (Gato)'
                subtitle={(
                  <>
                    <p>Creado el 20 Febrero / 9:00 am</p>
                    <p>Codigo: RR14****</p>
                  </>
                )}
              />
            ))
          }
        </div>
        <div className="flex justify-center mb-4">
          <Button variant="outline" className='bg-orange text-white w-4/5'>Asocial Pin QR</Button>
        </div>
      </div>
    </div>
  )
}