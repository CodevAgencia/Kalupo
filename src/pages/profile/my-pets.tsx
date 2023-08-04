import {FC, useState} from 'react';
import ProfileLayout from "@/components/layout/profile";
import PetsForm from '@/components/features/PetsForm/PetsForm';
import {AvatarPets} from '@/components/features/AvatarPets/AvatarPets';
import {TabsWithTitle} from '@/components/shared/TabsWithTitle/TabsWithTitle';

const PetsAvatars = [
  {
    url: '/assets/images/profiles/profile-perro.jpg',
    id: 'dog-xd',
    name: 'Peludo'
  },
  {
    url: '/assets/images/profiles/profile-cat.jpg',
    id: 'cat-xd',
    name: 'Max  '
  },
  {
    url: '/assets/images/profiles/profile-cat.jpg',
    id: 'cat-xd',
    name: 'Charlie'
  },
  {
    url: '/assets/images/profiles/profile-cat.jpg',
    id: 'cat-xd',
    name: 'Lucy'
  },
  {
    url: '/assets/images/profiles/profile-cat.jpg',
    id: 'cat-xd',
    name: 'Buddy'
  },
  {
    url: '/assets/images/profiles/profile-cat.jpg',
    id: 'cat-xd',
    name: 'Molly'
  }
]

const Index: FC = () => {

  const [idPet, setIdPet] = useState<number>(1)
  const [tabActive, setTabActive] = useState(0)

  return (
    <ProfileLayout>
      <div className={`max-w-xl`}>
        <div>
          {
            idPet ? (
              <div className="mb-3">
                <h2 className="text-blue text-lg flex-1 font-semibold mb-2">Mis mascotas</h2>
                <AvatarPets
                  pets={PetsAvatars}
                  onClick={(petId) => {
                  }}
                />
              </div>
            ) : (
              <TabsWithTitle
                tabActive={tabActive}
                setTabActive={setTabActive}
                title='Agregar mascota'
                tabs={[
                  'Perros',
                  'Gatos'
                ]}
              />
            )
          }
        </div>
        <PetsForm
          setIdPet={setIdPet}
          idPet={idPet}
        />
      </div>
    </ProfileLayout>
  );
};

export default Index;
