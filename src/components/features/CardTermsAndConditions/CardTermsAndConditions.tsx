import { FC } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import style from './CardTermsAndConditions.module.scss';
import {ArrowLeft} from "lucide-react";

interface CardTermsAndConditionsProps {
  redirect?: string;
}

const CardTermsAndConditions: FC<CardTermsAndConditionsProps> = ({
  redirect = '/',
}) => {
  return (
    <section
      className={`${style['TermsAndConditions']} min-h-screen w-full flex flex-col items-center justify-center py-1`}
    >
      <div className="w-full flex flex-col gap-4 p-2">
        <div>
          <Link href="/" className="flex flex-row items-center gap-3">
            <Button className="rounded-full flex flex-col items-center justify-center">
              <ArrowLeft className={'text-white'} />
            </Button>
            <p className="font-bold">Volver a home</p>
          </Link>
        </div>
        <div className="rounded-md shadow-lg p-4 flex flex-col items-center justify-center">
          <h2 className="font-bold text-base w-full">
            Términos y condiciones de cupón
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit magnam dolor omnis optio eveniet quibusdam nulla
            corporis quaerat ab quis asperiores fuga earum, natus esse assumenda
            sapiente minima autem dolores? Nemo ad numquam nisi eos veniam eaque
            porro ab reiciendis at non aspernatur a aliquam magni esse
            cupiditate, quaerat quia, suscipit dolorum possimus corrupti sit
            omnis, aperiam modi! Provident, odio. Dolorum, ipsum odio.
            Voluptatem iure enim architecto, totam repellendus laboriosam,
            dolore expedita provident vitae adipisci quasi nulla magni delectus
            laudantium at cum quibusdam omnis, repellat natus harum quisquam
            quidem hic. Necessitatibus nobis itaque nisi asperiores officia, eum
            cupiditate. Veritatis officiis enim quo ab esse repudiandae
            explicabo expedita architecto dolor distinctio est id itaque
            obcaecati, culpa nesciunt, recusandae dolorem optio accusamus!
            Voluptatem officia ipsam qui corporis amet maxime. Quo, cumque
            illum? Nisi in eius sit, et at amet voluptate obcaecati minima quas!
            Cum perferendis nihil laborum qui delectus vero ea ipsam?
            Reprehenderit, nostrum laudantium officiis voluptatum enim a id odit
            aspernatur quibusdam molestias in qui ratione deleniti recusandae
            expedita atque quam suscipit corporis, cupiditate tempore voluptate
            rerum aut quas. Rerum, vel.
          </p>
          <Link href={redirect} className="flex justify-center w-full mt-3">
            <Button className="w-5/6 rounded-md">Volver</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CardTermsAndConditions;
