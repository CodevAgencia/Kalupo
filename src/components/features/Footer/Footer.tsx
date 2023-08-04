import React from 'react'
import Image from "next/image";
import styles from './Footer.module.scss'
const Footer = () => {
  return (
    <footer className={styles.footer + ' mt-20'}>
      <div className={`container text-black ${styles.container}`}>
        <div className="flex mt-32 flex-col gap-4 md:flex-row justify-center md:gap-16">
          <div className="image-container flex justify-center items-center">
            <Image
              src={'/assets/icons/logo-horizontal.svg'}
              fill
              alt='logotipo kalupo'
              className={`image-responsive ${styles.logo_footer}`}
            />
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h3 className='font-bold text-xl'>Legal</h3>
            <div className="flex flex-col">
              <a href="/terms-and-conditions" className='text-lg text-black '>Politicas de privacidad</a>
              <a href="/terms-and-conditions" className='text-lg text-black '>Terminos y condiciones</a>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h3 className='font-bold text-xl'>Contacto</h3>
            <div className="flex flex-col">
              <a href="#" className='text-lg text-black '>Telefono</a>
              <a href="#" className='text-lg text-black '>Dirección de Notificación</a>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h3 className='font-bold text-xl text-black '>Métodos de pago</h3>
            <div className="image-container">
              <Image
                src={'/assets/images/payments-metods.png'}
                fill
                alt='Pyments metods'
                className={`image-responsive ${styles.payments_metods}`}
              />
            </div>
          </div>
        </div>
        <div className="mt-10 ">
          <hr className='border-gray-light' />
        </div>
        <div className="mt-6 mb-6 text-center">
          <p>Copyright © {new Date().getFullYear()} Gopet - Derechos reservados</p>
        </div>
        </div>
      </footer>
  )
}

export default Footer