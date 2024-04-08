import Range from "@/components/ui/range/Range";
import { FC } from "react";
import { useFilters } from "../../useFilters";
import FilterWrapper from "../FilterWrapper";

const PriceGroup: FC = () => {
   const { queryParams, updateQueryParams } = useFilters();

   return (
      <FilterWrapper title="Price from/to">
         <Range
            fromInitialValue={queryParams.minPrice}
            toInitialValue={queryParams.maxPrice}
            onChangeFromValue={(value) => updateQueryParams("minPrice", value)}
            onChangeToValue={(value) => updateQueryParams("maxPrice", value)}
            max={10000}
         />
      </FilterWrapper>
   );
};

export default PriceGroup;
