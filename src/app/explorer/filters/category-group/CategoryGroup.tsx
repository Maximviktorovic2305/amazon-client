import { Loader } from "@/components/ui/Loader";
import CheckBox from "@/components/ui/checkbox/CheckBox";
import { useCategories } from "@/hooks/queries/useCategory";
import { FC } from "react";
import { useFilters } from "../../useFilters";
import FilterWrapper from "../FilterWrapper";

const CategoryGroup: FC = () => {
   const { queryParams, updateQueryParams } = useFilters();
   const { data, isLoading } = useCategories();

   return (
      <FilterWrapper title="Category">
         {isLoading ? (
            <Loader />
         ) : data?.length ? (
            data.map((category) => {
               const isChecked =
                  queryParams.categoryId === category.id.toString();
               return (
                  <CheckBox
                     isChecked={isChecked}
                     onClick={() =>
                        updateQueryParams(
                           "categoryId",
                           isChecked ? "" : category.id.toString()
                        )
                     }
                     key={category.id}
                     className="mb-2 text-sm">
                     {category.name}
                  </CheckBox>
               );
            })
         ) : (
            <p>Categories not found </p>
         )}
      </FilterWrapper>
   );
};

export default CategoryGroup;
