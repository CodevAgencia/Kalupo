import React from 'react';
import styles from './SheetMenu.module.scss'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image';
import NavLink from '@/components/shared/NavLink/NavLink';


interface SheetMenuProps {
  onChangeEvent: (event:string) => void
}

const SheetMenu:React.FC<SheetMenuProps> = ({onChangeEvent}) => {
  const [open, setOpen] = React.useState(false);

  const linksOverlays = [
    {
      route: '/',
      color: 'black',
      name: 'Perfil',
      action: setOpen
    },
    {
      route: '/',
      color: 'black',
      name: 'Mis pedidos',
      action: setOpen
    },
    {
      route: '/',
      color: 'black',
      name: 'Mis mascotas',
      action: setOpen
    },
    {
      route: '/',
      color: 'black',
      name: 'Terminos y condiciones',
      action: setOpen
    },
    {
      route: '/',
      color: 'black',
      name: 'Ayuda en whastapp',
      action: setOpen
    }
  ]

  const handleEvent = (eventText:string) => {
    setOpen(false)
    onChangeEvent(eventText)
  }
  
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className={`${styles.burger_icon} image-container`}>
          <Image
            fill
            src={'/assets/icons/burger-nav.svg'}
            alt="Burger navigation"
            className={'image-responsive'}
            onClick={() => setOpen(true)}
          />
        </div>
      </SheetTrigger>
      <SheetContent  position="left" size={'default'}  className={`p-0 border-none ${styles.sheet_content}`}>
        <button className={styles.close_button} onClick={() => setOpen(false)}>
         <img src="/assets/icons/close_sheet.svg" alt="Close button" />
        </button>
        <div className={styles.overlay_meny}>
          <div className={styles.menu_links_container}>
            <div className="flex flex-col items-center justify-center mt-4">
              <div className="image-container mb-4">
                <Image
                  src={'/assets/images/profiles/profile_test.png'}
                  alt="Imagen de perfil"
                  className={`image-responsive ${styles.image_profile} rounded-full`}
                  fill
                />
              </div>
              <div className="mb-4">
                <div className="mb-3 text-center">
                  <p className="m-0 text-xl font-semibold">Alex Subago</p>
                  <p className="m-0 text-lg font-light">juliancho037@hotmail.com</p>
                </div>
                <button className="w-full p-2.5 rounded-3xl bg-brown text-white">
                  Agregar Mascota
                </button>
              </div>
              <div className="flex flex-col justify-center items-center gap-3">
                {
                  linksOverlays.map((linkEl, indx) => (
                    <NavLink key={indx} route={linkEl.route} large color={linkEl.color} onClick={() => linkEl.action(false)} className='m-0 text-black'>
                      {linkEl.name}
                    </NavLink>
                  ))
                }
              </div>
              <div className="mt-8 flex flex-col gap-2 w-full md:hidden">
                <button onClick={() => handleEvent('add_cuenta')} className="w-full p-2.5 rounded-3xl border-brown border-2 text-brown font-semibold">
                    Crear cuenta
                </button>
                <button onClick={() => handleEvent('init_session')}  className="bg-gray w-full p-2.5 rounded-3xl text-white font-semibold">
                    Iniciar sesión
                </button>
              </div>
            </div>
            <button className="text-black font-extrabold text-center mb-4" onClick={() => setOpen(false)}>
              Cerrar sesion
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetMenu