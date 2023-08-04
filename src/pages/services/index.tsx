import { FC } from 'react';
import Layout from '@/components/layout/layout';
import Footer from '@/components/features/Footer/Footer';
import CardsServices from '@/components/features/services/CardsServices';

const Index: FC = () => {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <CardsServices />
        <Footer />
      </main>
    </Layout>
  );
};

export default Index;
