import styles from './CategoryService.module.scss'
import {FC} from "react";
import {useRouter} from "next/navigation";

type CategoryServicePropsType = {
  link_one: string,
  link_two: string,
}
export const CategoryService: FC <CategoryServicePropsType> = ({link_one, link_two}) => {
  const {push} = useRouter()

  const handleClick = (link: string) => {
    push(link)
  }


  return (
    <section className="w-full ">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center w-full my-8 text-center ">
          <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-light">
            Todo lo que necesitas <br />
            <span className="text-blue"> para tus mascotas</span>
          </h2>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center gap-9 lg:px-4">
          <div
            className={`w-full flex justify-end items-center rounded-3xl h-80 md:h-60 lg:h-96 cursor-pointer ${styles.bg_image_person}`}
            onClick={() => handleClick(link_one)}
          >
            <h2 className="text-2xl lg:text-4xl text-right mr-16 font-bold  text-white mb-2 md:mb-0">
              COMPRAS
            </h2>
          </div>
          <div
            className={`w-full  flex justify-start items-center   rounded-3xl h-80 md:h-60 lg:h-96 cursor-pointer ${styles.bg_image_dog}`}
            onClick={() => handleClick(link_two)}
          >
            <h2 className="text-2xl lg:text-4xl text-left ml-16 font-bold text-white mb-2 md:mb-0">
              SERVICIOS
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}