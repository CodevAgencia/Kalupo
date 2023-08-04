"use client";
import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const MainBanner = () => {
  return (
    <section className="w-full h-[auto]"> 
      <MDBCarousel showControls showIndicators>
        <MDBCarouselItem
          className='w-full block'
          itemId={1}
          src='https://i.imgur.com/1FYx6NM.png'
          alt='...'
        />
        {/* <MDBCarouselItem
          className='w-full block'
          itemId={2}
          src='https://i.imgur.com/1FYx6NM.png'
          alt='...'
        />
        <MDBCarouselItem
          className='w-full block'
          itemId={3}
          src='https://i.imgur.com/1FYx6NM.png'
          alt='...'
        /> */}
      </MDBCarousel>
    </section>
  );
};

export default MainBanner;
