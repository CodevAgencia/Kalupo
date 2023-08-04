import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FC } from 'react';
import { ArrowLeft } from 'lucide-react';

const ButtonBack: FC = () => {
  return (
    <Link
      href="/"
      className=" w-full max-w-[200px] min-w-[200px] h-full max-h-[40px] flex justify-center items-center gap-2 my-3"
    >
      <Button className="bg-blue hover:bg-blue w-7 h-7 p-0 rounded-full flex flex-col items-center justify-center ">
        <ArrowLeft color="white" size={18} />
      </Button>
      <p className="font-bold text-blue">Volver a home</p>
    </Link>
  );
};

export default ButtonBack;
