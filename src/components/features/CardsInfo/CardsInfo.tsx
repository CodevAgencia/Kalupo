// import icon from '../../../../public/assets/images/icon.png'
import Image from 'next/image'
import styles from './CardInfo.module.scss'
const CardsInfo = () => {
  const optionsCards = [
    {
      id: 1,
      icon: '/assets/icons/card-top-icon.svg',
      text: 'es simplemente el texto de relleno de las imprentas y archivos de texto. es simplemente el texto de relleno de las imprentas y archivos de texto. es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
    },
    {
      id: 2,
      icon: '/assets/icons/card-top-icon.svg',
      text: 'es simplemente el texto de relleno de las imprentas y archivos de texto. es simplemente el texto de relleno de las imprentas y archivos de texto. es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
    },
    {
      id: 3,
      icon: '/assets/icons/card-top-icon.svg',
      text: 'es simplemente el texto de relleno de las imprentas y archivos de texto. es simplemente el texto de relleno de las imprentas y archivos de texto. es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
    }
  ]
  return (
    <section >
      <div className="container">
        <div className='flex flex-row justify-center mt-16 mb-16'>
          <h3 className='text-2xl lg:text-4xl font-bold text-gray-light'>Tus peludos <span className='text-blue'>nos prefieren</span></h3>
        </div>
        <div className='flex flex-col md:flex-row gap-10 md:gap-5 '>
          {
            optionsCards.map((item) => (
              <div key={item.id} className='bg-orange text-white flex flex-col justify-center items-center p-4 rounded-2xl '>
                <Image
                  src={item.icon}
                  alt="logo"
                  width={18}
                  height={18}
                  className={`h-20 w-20 ${styles.icon_desbor}`}
                />
                <p className='text-center relative top-[-20px]'>{item.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default CardsInfo