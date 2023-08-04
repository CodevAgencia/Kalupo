import { FC } from 'react';
import Layout from '@/components/layout/layout';
import Footer from '@/components/features/Footer/Footer';
import CardTermsAndConditions from '@/components/features/CardTermsAndConditions/CardTermsAndConditions';

const Index: FC = () => {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <CardTermsAndConditions />
        <Footer />
      </main>
    </Layout>
  );
};

export default Index;
