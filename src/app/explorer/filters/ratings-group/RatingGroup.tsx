import CheckBox from "@/components/ui/checkbox/CheckBox";
import { FC } from "react";
import { Rating } from "react-simple-star-rating";
import { useFilters } from "../../useFilters";
import FilterWrapper from "../FilterWrapper";
import { RATING_VARIANT } from "./ratings-variant.data";
import { updateRatingsQuery } from "./update-ratings-query";

const RatingGroup: FC = () => {
   const { queryParams, updateQueryParams } = useFilters();

   return (
      <FilterWrapper title="Number of Reviews">
         {RATING_VARIANT.map((rating) => (
            <CheckBox
               isChecked={queryParams.ratings?.includes(rating.toString())}
               onClick={() =>
                  updateQueryParams(
                     "ratings",
                     updateRatingsQuery(queryParams.ratings, rating.toString())
                  )
               }
               key={rating}
               className="mb-2 text-sm">
               <Rating
                  readonly
                  initialValue={rating}
                  SVGstyle={{ display: "inline-block" }}
                  size={20}
                  transition
               />
            </CheckBox>
         ))}
      </FilterWrapper>
   );
};

export default RatingGroup;
