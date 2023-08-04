import {FC} from 'react';
import ProfileLayout from '@/components/layout/profile';
import ProfileForm from "@/components/features/Profile/ProfileForm";
import users from '@/data/users.json';

const Index: FC = () => {
  //temporal users[0]

  return <ProfileLayout>
    <ProfileForm user={users[0]} />
  </ProfileLayout>;
};

export default Index;
