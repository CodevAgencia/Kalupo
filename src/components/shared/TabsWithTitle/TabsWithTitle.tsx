import { useState } from "react"

interface TabsWithTitleProps {
  title:string
  tabs: string[]
  setTabActive: (tab:number) => void
  tabActive: number;
  className?: string;
  classNameItems?: string
}

export const TabsWithTitle:React.FC<TabsWithTitleProps> = ({tabs, title, setTabActive, tabActive, className, classNameItems}) => {

  

  return (
    <>
      <div className={`flex flex-col lg:flex-row items-center mb-3 gap-2 lg:gap-0 ${className}`}>
        { title && <h2 className="text-blue text-lg flex-1 font-semibold mb-0">{title}</h2>}
        <div className={`flex gap-2 text-white font-semibold w-full lg:w-max ${classNameItems}`}>
          {
            tabs.map((tab,inx) => (
              <button key={inx} className={`p-2.5 bg-blue rounded-full w-full lg:w-48 ${tabActive === inx ? 'bg-blue' : 'bg-gray-light'}`} onClick={() => setTabActive(inx)}>{tab}</button>
            ))
          }
          
          {/* <button  className={`p-2.5  rounded-full  w-28  lg:w-48 ${!isModeDog ? 'bg-blue' : 'bg-gray-light'}`} onClick={() => setIsModeDog(false)}>Gatos</button> */}
        </div>
      </div>
    </>
  )
}