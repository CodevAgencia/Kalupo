import {FC, ReactNode} from 'react';
import Layout from '@/components/layout/layout';
import CardProfile from "@/components/features/CardProfile/CardProfile";
import {Card, CardContent} from "@/components/ui/card";
import {Bone, QrCode, ScrollTextIcon, Truck, User, Power, FileBox} from "lucide-react";
import {useRouter} from "next/router";

type ProfileSectionType = {
  name: string,
  icon: any,
  path: string
}

const sections = [
  {name: 'Configurar mi cuenta', icon: <User/>, path: '/profile'},
  {name: 'Historial de pedidos', icon: <Truck/>, path: '/profile/orders-history'},
  {name: 'Mis mascotas', icon: <Bone/>, path: '/profile/my-pets'},
  {name: 'QR', icon: <QrCode/>, path: '/profile/qr'},
  {name: 'Datos de facturacion', icon: <FileBox/>, path: '/profile/billing'},
  {name: 'Terminos y condiciones', icon: <ScrollTextIcon/>, path: '/terms-and-conditions'},
  {name: 'Cerrar sesion', icon: <Power/>, path: '/close-session'},
]

const user = {
  name: 'Joe',
  last_name: 'Doe',
  email: 'joe@email.com',
  phone: '3113564654',
  indicative_phone: '57',
  address: 'Calle 23 #56 -45',
  coins: 145,
}
const ProfileLayout: FC<{ children: ReactNode }> = ({children}) => {
  const ProfileSection: FC<ProfileSectionType> = ({name, icon, path}): ReactNode => {
    const router = useRouter();

    const isActive = (path: string): boolean => {
      return router.pathname === path
    }

    return (
      <div
        className={`flex flex p-2 justify-center items-center cursor-pointer text-gray hover:text-primary hover:bg-primary-foreground
         ${isActive(path) ? 'text-primary' : ''}
         `}
        onClick={() => router.push(path)}
      >
        <div className="text-sm text-primary tracking-wide">
          {icon}
        </div>
        <div className={`flex-grow px-2 ${isActive(path) ? 'font-bold' : 'font-medium'}`}>
          {name}
        </div>
      </div>
    )
  }
  const ProfileSections: FC<{ sections: ProfileSectionType[], className?: string }> = ({sections, className}):ReactNode => {
    return (
      <div className={`flex flex-col gap-1 justify-center ${className}`}>
        {sections.map((item, key) => <ProfileSection key={key} {...item} />)}
      </div>
    )
  }


  return (
    <Layout>
      <div className="container mx-auto flex min-h-screen flex-row">
          <aside className="sidebar w-48 lg:w-1/3 -translate-x-full transform p-4 transition-transform duration-150 ease-in md:translate-x-0">
            <div className={'flex flex-col gap-2'}>
              <CardProfile {...user}/>
              <Card className={'shadow-md'}>
                <CardContent className={'flex flex-wrap justify-center p-1 py-2'}>
                  <ProfileSections sections={sections} />
                </CardContent>
              </Card>
            </div>
          </aside>
          <main className="-ml-48 flex flex-grow flex-col pt-4 px-3 transition-all duration-150 ease-in md:ml-0 sm:w-full">
            {children}
          </main>
      </div>
    </Layout>
  );
};

export default ProfileLayout;
