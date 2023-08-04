import {FC} from "react";


type SimpleBreadcrumbsPropType = {
  label:string
  items: string[],

  className: string|undefined
}
const SimpleBreadcrumb: FC<SimpleBreadcrumbsPropType> = ({ items, label, className }) => {

  const isLast = (index: number): string => {
    return  items.length - 1  == index ? '' : 'after:content-["/"]'
  }

  return (
    <nav className={`font-sans w-full ${className}`}>
      <ol className="list-reset flex text-grey-dark m-0 p-0">
          <li><a href="src/components/ui#" className="text-dark font-bold mr-1">{label}:</a></li>
        { items.map((item, index) =>
          <div key={index}>
            <li><a href="src/components/ui#" className={`text-primary font-semibold mr-1  ${isLast(index)} after:m-1`}>{item}</a></li>
          </div>
        )}
      </ol>
    </nav>
  )
}

export default SimpleBreadcrumb
