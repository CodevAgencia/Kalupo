import { TabsWithTitle } from "@/components/shared/TabsWithTitle/TabsWithTitle";
import ProfileLayout from "@/components/layout/profile";
import { FC, useState } from "react";
import { AssociateQR } from "@/components/features/AssociateQr/AssociateQr";


const Index: FC = () => {



  return (
    <ProfileLayout>
      <div style={{ maxWidth: '660px' }} className={`bg-white mt-5`}>
        <h2 className="text-blue text-lg flex-1 font-semibold mb-2 ml-4">QR</h2>
        <AssociateQR />
      </div>
    </ProfileLayout>
  );
};

export default Index;
