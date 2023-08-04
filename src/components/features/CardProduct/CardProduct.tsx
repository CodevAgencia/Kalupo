import {FC} from "react";
import {CardProductPropsType} from "@/types/components/card-product";
import {Button} from "@/components/ui/button";
const CardProduct: FC<CardProductPropsType> = ({
  coin,
  name,
  value,
  discount,
  image
}) => {

  return (
    <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg p-8"
             src={image}
             alt={name}
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h3 className="text-gray-900 font-semibold text-xl text-dark uppercase">
            {name}
          </h3>
        </a>
        <div className="flex flex-col">
          <h4 className="text-md font-bold text-primary">${value}</h4>
          <h4 className="text-md font-bold text-primary">%{discount}</h4>
          <Button className={'w-full mt-1 p-4 rounded-2xl font-bold'}>
            Agregar al carrito
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;