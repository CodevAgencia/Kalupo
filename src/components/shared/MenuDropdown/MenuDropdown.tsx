import useOnClick from "@/hooks/use-onclick"
import { useOntoggleMenu } from "@/hooks/use-ontoggle-menu"
import { useState, useRef } from "react"

interface MenuDropDownProps {
  className?: string | string[]
  children?: React.ReactNode
  activator?: (setOpenMenu: () => void) => React.ReactNode
}

export const MenuDropDown:React.FC<MenuDropDownProps> = ({ children, activator, className }) => {

  const [isOpenMenu, setOpenMenu] = useState(false)

  const dropdown = useRef(null);
  const toggeMenuWind = useOntoggleMenu(dropdown, setOpenMenu);
  useOnClick(isOpenMenu, toggeMenuWind);
  const toggeMenu = () => setOpenMenu(opened => !opened)

  return (
    <div ref={dropdown} className={`relative inline-block text-left `}>
      { activator && activator(toggeMenu) }
      <div
        className={`${!isOpenMenu && 'hidden'} ${className} w-max absolute origin-top-right z-2`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        >
          {children}
      </div>
    </div>
  )
}