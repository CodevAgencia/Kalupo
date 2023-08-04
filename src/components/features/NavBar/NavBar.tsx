import * as Dialog from '@radix-ui/react-dialog';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Image from "next/image";
import React, { useState } from "react";
import NavLink from "@/components/shared/NavLink/NavLink";
import LoginForm from "@/components/features/LoginForm/LoginForm";
import RegisterForm from "@/components/features/RegisterForm/RegisterForm";
import { useWindowSize } from "@/hooks/user-window-size";
import styles from './NavBar.module.scss'
import AddressForm from '../AddressForm/AddressForm';
import SheetMenu from '../SheetMenu/SheetMenu';
import MapContainer from '../MapContainer/MapContainer';

const Navbar = () => {
  const size = useWindowSize();
  const [popover, setPopover] = useState(false)

  const [selectAddres, setSelectAddres] = useState<any[]>([])

  const [openModalRegister, setOpenModalRegister] = useState(false)
  const [openModalLogin, setOpenModalLogin] = useState(false)

  const [openModalMaps, setOpenModalMaps] = useState(false)


  return (
    <> 
      <nav className={styles['nav-bar']}>
        <div className="container">
          <div className={styles['logo_container']} >
              <div className="flex flex-row items-center gap-4">
                <div className={`${styles} image-container`}>
                  <SheetMenu onChangeEvent={(event) => {
                    const events:any = {
                      'add_cuenta': () => setOpenModalRegister(true),
                      'init_session': () => setOpenModalLogin(true)
                    }
                    events[event] && events[event]()
                  }} />
                </div>
                <NavLink route="/">
                  <div className={`${styles.logo_tipo} image-container`}>
                      <Image
                        fill
                        src={'/assets/icons/logo-kalupo.svg'}
                        alt="Logotipo Kalupo"
                        className={'image-responsive'}
                      />
                  </div>
                </NavLink>
              </div>
          </div>
          <div className={styles['nav_links']}>
            {
              size.width > 768 ? (
                <>
                  <Popover open={popover} onOpenChange={() => {}}  >
                    <PopoverTrigger>
                      <button className='font-semibold mr-11 flex items-center bg-none text-white' onClick={() => {
                        setPopover(false)
                        if (!popover) {
                          setOpenModalMaps(true)
                        }
                      }}>
                        Agregar dirección
                        <img src="/assets/icons/map-icon.svg" alt="Icon Chevron" width={24} className='ml-3' />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent  className={`bg-transparent p-0 border-0 mt-12 md:w-80 lg:w-96 shadow-none`}>
                      <AddressForm
                        itemsAddress={selectAddres}
                      />
                    </PopoverContent>
                  </Popover>                  
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className={`text-white bg-gray-button px-5 py-1 rounded-3xl ${styles['menu_button']}  mr-3`}>
                        Comenzar
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className={`p-0 text-white bg-transparent border-0 mt-6 lg:w-96 shadow-none`} >
                      <div className={`pt-3 px-4 pb-4 lg:pb-8  lg:pt-6 lg:px-5 bg-blue rounded-3xl shadow-lg `} >
                        <div className='flex flex-col gap-3 lg:gap-6'>
                          <div className="">
                            <p className='mb-2  font-semibold'>Tengo una cuenta</p>
                            <button className='p-2.5 lg:p-4/3 w-full border-white border-2 rounded-lg  font-semibold' onClick={() => setOpenModalRegister(true)}>Crear cuenta</button>
                          </div>
                          <div className="">
                            <p className='mb-2  font-semibold'>Soy cliente nuevo</p>
                            <button className='p-2.5 lg:p-4/3 w-full bg-gray rounded-lg h-auto text-white  font-semibold' onClick={() => setOpenModalLogin(true)}>Iniciar sesión</button>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                <NavLink color="white" route="/profile" className='mr-9'>
                  <div className={`${styles.account} image-container`}>
                    <Image
                      fill
                      src={'/assets/icons/account.svg'}
                      alt="Account user"
                      className={'image-responsive'}
                    />
                  </div>
                </NavLink>
              </>
            ) : null}
              <div className={`${styles.cart_product} image-container`}>
                <Image
                  fill
                  src={'/assets/icons/buy-cart.svg'}
                  alt="Cart product"
                  className={'image-responsive'}
                />
              </div>
          </div>
        </div>
      </nav>

      <Dialog.Root open={openModalRegister} onOpenChange={setOpenModalRegister}>
        <Dialog.Portal>
          <Dialog.Overlay className="dialog-overlay">
            <Dialog.Content className="dialog-content max-w-[100%]  p-3 lg:max-w-[540px] ">
                <RegisterForm handleLogin={()=> {
                  setOpenModalLogin(true)
                  setOpenModalRegister(false)
                }} />
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root open={openModalLogin} onOpenChange={setOpenModalLogin}>
        <Dialog.Portal>
          <Dialog.Overlay className="dialog-overlay">
            <Dialog.Content className="dialog-content sm:max-w-[100%] p-3 md:max-w-[500px] ">
              <LoginForm handleRegister={()=> {
                setOpenModalLogin(false)
                setOpenModalRegister(true)
              }}
              />
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root open={openModalMaps} onOpenChange={setOpenModalMaps}>
        <Dialog.Portal>
          <Dialog.Overlay className="dialog-overlay">
            <Dialog.Content className="dialog-content p-4 sm:max-w-[100%] md:max-w-[500px]">
              <MapContainer
                handleCurrentAddress={(values) => {
                  if (values) {
                    setSelectAddres(values)
                  }
                  setOpenModalMaps(false)
                  setPopover(true)
                }}
              />
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default Navbar;
