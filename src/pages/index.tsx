import Footer from "@/components/features/Footer/Footer";
import {FC} from "react";
import Layout from "@/components/layout/layout";
import CardsInfo from "@/components/features/CardsInfo/CardsInfo";
import { CategoryService } from "@/components/features/CategoryService/CategoryService";
import { BannerImage } from "@/components/features/BannerImage/BannerImage";
import Brands from "@/components/features/Brands/Brands";

const Index: FC = () => {
  return (
    <Layout>
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <BannerImage imageUri="/assets/images/banners/main-banner.png" />
        <CategoryService link_one={'/products'} link_two={'/services'} />
        <BannerImage
          title={<h2 className='text-2xl lg:text-4xl font-extrabold text-gray-light'>Pedidos <span className='text-blue'>programados</span></h2>}
          imageUri="/assets/images/banners/banner-send-programed.png"
        />
        <CardsInfo />
        <Brands />
        <Footer />
      </main>
    </Layout>
  );
}
export default Index;