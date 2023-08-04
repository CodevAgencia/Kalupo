import { Button } from '@/components/ui/button';
import { FC } from 'react';
import type { CardServiceProps } from '@/types/components/services';
import {Card, CardContent} from "@/components/ui/card";

const CardService: FC<CardServiceProps> = ({
  id,
  name,
  summary,
  whatsapp_link,
  image,
}) => {
  return (
    <Card className={'shadow-lg'}>
      <CardContent className={'p-4'}>
        <div className="flex flex-col gap-3 w-full">
          <div className={'max-w-md p-5 sm:flex sm:space-x-6'}>
            <div className="flex justify-center flex-shrink-0 w-full mb-2 h-44 sm:h-32 sm:w-32 sm:mb-0">
              <img
                src={image}
                alt={name}
                className="object-cover object-center w-30 h-30 rounded-full dark:bg-gray-500"
              />
            </div>
            <div className={'flex flex-col space-y-4'}>
              <h1 className="text-blue-d font-roboto font-bold text-base leading-5 tracking-wide flex gap-2">
                Servicio
                <span className="text-blue font-roboto font-bold text-base leading-5 tracking-wide">
                    {name}
                  </span>
              </h1>
              <p className={'font-normal text-sm'}>{summary}</p>
            </div>
          </div>
          <div className="flex justify-end items-center my-1">
            <Button>Ver Detalle</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardService;
