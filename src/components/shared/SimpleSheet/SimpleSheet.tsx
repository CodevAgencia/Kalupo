"use client"
import {FC, ReactNode} from "react"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
const SimpleSheet: FC<{
  classNameBody?:string,
  children: ReactNode,
  button: ReactNode,
  title?: string
  sutTitle?:string,
  actions?:ReactNode,
}> = ({actions, button, title, sutTitle, classNameBody, children}) => {
  return (
    <div className="flex flex-col space-y-8">
      <Sheet>
        <SheetTrigger asChild>
          {button}
        </SheetTrigger>
        <SheetContent position="bottom" size={'xl'}>
          {
            title ?
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            {
              sutTitle ? <SheetDescription>
                {sutTitle}
                Selecciona los filtros para realizar un búsqueda en nuestros productos
              </SheetDescription> : null
            }
          </SheetHeader> : null
          }
          <div className={`w-full flex flex-wrap align-items-center justify-around overflow-auto h-full p-2 ${classNameBody}`}>
            {children}
          </div>
          {
            actions ?
            <SheetFooter>
              <SheetClose asChild>
                {actions}
              </SheetClose>
            </SheetFooter> : null
          }
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default SimpleSheet;
