import {FC, useState} from "react";
import Layout from "@/components/layout/layout";
import CardProduct from "@/components/features/CardProduct/CardProduct";
import FilterProducts from "@/components/features/FilterProducts/FilterProducts";
import SimpleBreadcrumb from "@/components/shared/SimpleBreadcrumb/SimpleBreadcrumb";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {FiltersSelectedType, ProductType} from "@/types/products";
import products from '@/data/products.json';
import SimpleSheet from "@/components/shared/SimpleSheet/SimpleSheet";
import {ListFilter} from "lucide-react";
const Index: FC = () => {
  const [filters, setFilters] = useState<FiltersSelectedType>()

  const getSelectedNames = ():string[] => {
    const values = typeof filters !== 'undefined' && filters ? Object.keys(filters).map((key) => filters[key]?.value) : []
    return values.filter((val) => typeof val !== 'undefined')
  }

  return (
    <Layout>
      <div className="flex min-h-screen flex-row">
        <aside className="sidebar w-48 lg:w-1/4 -translate-x-full transform bg-white p-4 transition-transform duration-150 ease-in md:translate-x-0">
          <div className={'flex flex-wrap items-center justify-around'}>
            <span className={'text-dark font-bold mr-1'}>Filtros:</span>
            <Button variant="outline" className={'w-1/2 rounded-full border-solid border-spacing-1 border-gray-500'}>
              Limpiar Filtros
            </Button>
          </div>
          <FilterProducts onChange={(selected) => setFilters(selected)} />
        </aside>
        <main className="-ml-48 flex flex-grow flex-col pt-4 px-3 transition-all duration-150 ease-in md:ml-0 sm:w-full">
          <div className={'w-full flex flex-wrap align-items-center'}>
            <div className={'w-full flex flex-wrap align-items-center justify-around'}>
              <div className="grid w-full items-center gap-1.5">
                <Input type="text" placeholder="Buscar" className={'rounded-full border-gray-light'}>
                </Input>
              </div>
            </div>
            <SimpleBreadcrumb label={'Filtros'} items={getSelectedNames()} className={'w-80 my-2'}/>
            <div className={'w-full flex flex-wrap justify-content-between gap-2'}>
              <Button variant="outline" className={'rounded-full border-solid border-spacing-1 border-gray-500'} size={'lg'}>
                Limpiar Filtros
              </Button>
              <SimpleSheet
                title={'Filtros'}
                sutTitle={'Selecciona los filtros para realizar un búsqueda en nuestros productos'}
                button={
                  <Button variant="outline" className={'rounded-full border-solid border-spacing-1 border-gray-500'} size={'lg'}>
                    <ListFilter />
                  </Button>
                }
              >
                <FilterProducts className={'mb-36'} onChange={(selected) => setFilters(selected)} />
              </SimpleSheet>
            </div>
          </div>
          <div className="flex flex-wrap justify-center mt-2">
            <div className="grid grid-cols-1 gap-x-1 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-2 p-1">
              { products.map((product: ProductType , index) =>
                <CardProduct key={index} coin={product.coin} discount={product.discount} name={product.name} value={product.value} image={product.image} />
              )}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default Index