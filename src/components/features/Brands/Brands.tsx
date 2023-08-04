"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import brand1 from "../../../../public/assets/images/brands/brand1.png";
import brand2 from "../../../../public/assets/images/brands/brand2.png";
import brand3 from "../../../../public/assets/images/brands/brand3.png";
import brand4 from "../../../../public/assets/images/brands/brand4.png";
import brand5 from "../../../../public/assets/images/brands/brand5.png";
import brand6 from "../../../../public/assets/images/brands/brand6.png";
import styles from './Brands.module.scss'
const Brands = () => {
  const brandsData = [
    {
      id: 1,
      img: brand1,
    },
    {
      id: 2,
      img: brand2,
    },
    {
      id: 3,
      img: brand3,
    },
    {
      id: 4,
      img: brand4,
    },
    {
      id: 5,
      img: brand5,
    },
    {
      id: 6,
      img: brand6,
    },
    {
      id: 7,
      img: brand6,
    }
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 564 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 2
    }
  };

  return (
    <section className={styles.brands}>
      <div className="container">
        <h4 className="text-2xl lg:text-4xl text-left font-bold mt-16 mb-8 lg:mb-12 text-gray-light">Aliados</h4>
        <Carousel
          responsive={responsive}
          containerClass={styles.carousel}
          itemClass="image-container"
          infinite autoPlay arrows={false}
        >
          {
            brandsData.map((item, index) => (
              <Image
                key={index}
                src={item.img}
                loading="lazy"
                alt="brand"
                className={`${styles.imageItem} image-responsive`}
                fill
              />
            ))
          }
        </Carousel>
      </div>
    </section>
  );
};

export default Brands;
