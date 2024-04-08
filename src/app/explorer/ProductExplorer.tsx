"use client";

import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/button/Button";
import Catalog from "@/components/ui/catalog/Catalog";
import ProductService from "@/services/product/product.service";
import { TypePaginationProducts } from "@/types/product.interface";
import { useQuery } from "@tanstack/react-query";
import cn from "clsx";
import { FC, useState } from "react";
import styles from "./ProductExplorer.module.scss";
import { useFilters } from "./useFilters";
import Pagination from "./pagination/Pagination";
import SortDropDown from "./sort/SortDropDown";
import Filters from "./filters/Filters";

type IProductExplorer = {
   initialProducts: TypePaginationProducts;
};

const ProductExplorer: FC<IProductExplorer> = ({ initialProducts }) => {
   const [isFilterOpen, setIsFilterOpen] = useState(false);

   const { isFilterUpdated, queryParams, updateQueryParams } = useFilters();

   const { data, isFetching } = useQuery({
      queryKey: ["product explorer", queryParams],
      queryFn: () => ProductService.getAll(queryParams),
      initialData: initialProducts,
      enabled: isFilterUpdated,
   });

   return (
      <>
         <div className="flex items-center justify-between mb-7 text-black">
            <Heading>
               {queryParams.searchTerm
                  ? `Search by query '${queryParams.searchTerm}'`
                  : "Explorer"}
            </Heading>
            <SortDropDown />   
         </div>

         <button
            
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="mb-7 inline p-2 bg-bg-color rounded text-black hover:bg-secondary hover:text-primary duration-200">
               {isFilterOpen ? "Close" : "Open"} filters
            
         </button>

         <div
            className={cn(styles.explorer, {
               [styles.filterOpened]: isFilterOpen,
            })}>
            <aside>
               <Filters />
            </aside>

            <section>
               <Catalog products={data.products} isLoading={isFetching} />   
               <Pagination 
               changePage={page => updateQueryParams('page', page.toString())}   
               currentPage={queryParams.page}   
               numberPages={data.length / +queryParams.perPage}
                />   
            </section>
         </div>
      </>
   );
};

export default ProductExplorer;
