import { FC } from 'react';
import useFetch from '@/hooks/use-fetch';
import ButtonBack from '@/components/shared/ButtonBack/ButtonBack';
import CardService from './CardService';
import style from './services.module.scss';
import type { Service } from '@/types/components/services';

const CardsServices: FC = () => {
  const [data, isLoading] = useFetch<Service[]>('/json/servicesList.json');

  if (isLoading) return <></>;

  return (
    <section
      className={`${style.CardsServices} w-full flex justify-center py-2.5`}
    >
      <section className="w-full">
        <ButtonBack />
        <section className="flex flex-wrap gap-3 justify-center">
          {data?.map(({ id, name, summary, whatsapp_link, image }) => (
            <CardService
              key={id}
              id={id}
              name={name}
              summary={summary}
              whatsapp_link={whatsapp_link}
              image={image}
            />
          ))}
        </section>
      </section>
    </section>
  );
};

export default CardsServices;
