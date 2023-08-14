import Avatar from "@/components/ui/avatar"
import styles from './AvatarPets.module.scss'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import React, { FC } from "react";

interface AvatarPetsProps {
  pets: {
    id: string
    name: string
    url: string
  }[],
  onClick: (id: string) => void
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 564 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 564, min: 0 },
    items: 2
  }
};

export const AvatarPets: FC<AvatarPetsProps> = ({ onClick, pets }) => {

  return (
    <div className="flex gap-5">
      <Carousel
        responsive={responsive}
        containerClass={styles.carousel}
        itemClass="image-container"
        autoPlay arrows={true}
      >
        {pets ? pets.map((pet) => (
          <div key={pet.id} className='flex flex-col justify-center items-center gap-1'>
            <Avatar
              className={`border-3 h-24 w-24 ${styles.avatar_pet}`}
              onClick={() => onClick(pet.id)}
              src={pet.url} alt='sss'
            />
            <span>{pet.name}</span>
          </div>
        ))
          : <></>
        }
      </Carousel>
    </div>
  )
}