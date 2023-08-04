import {FC} from 'react';
import ProfileLayout from '@/components/layout/profile';
import users from '@/data/users.json';
import ChangePasswordForm from "@/components/features/Profile/ChangePasswordForm";

const Index: FC = () => {
  //temporal users[0]

  return <ProfileLayout>
    <ChangePasswordForm id={users[0].id} />
  </ProfileLayout>;
};

export default Index;
