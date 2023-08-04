import {FC} from 'react';
import {Card, CardContent} from "@/components/ui/card";
import {UserType} from "@/types/user";
import {Button} from "@/components/ui/button";

const CardProfile: FC <UserType> = ({
  name,
  last_name,
  email,
  coins
}) => {
  return (
    <Card className={'shadow-md'}>
      <CardContent className={'w-full'}>
        <img className="w-18 mx-auto rounded-full border-2 border-gray-500" src="https://avatars.githubusercontent.com/u/67946056?v=4" alt=""/>
        <div className="text-center mt-1 text-xl font-bold">{`${name} ${last_name}`}</div>
        <div className="text-center mt-1 text-lg font-medium">{email}</div>
        <div className="flex flex-wrap justify-center gap-2 px-6 mt-2 font-bold text-md">
          <img className="w-5" src="/assets/icons/coin.svg" alt=""/>
          <p className={'p-0 m-0 text-center text-primary'}>
            Tienes {coins} coins
          </p>
        </div>
        <div className="flex mt-3 justify-center">
          <Button className={'rounded-full bg-black hover:bg-secondary-foreground'}>
            Agregar mascota
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardProfile;
