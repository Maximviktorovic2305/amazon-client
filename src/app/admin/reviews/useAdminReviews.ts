import { IListItem } from "@/components/ui/admin/admin-list/admin-list.interface";
import ReviewService from "@/services/review.service";
import { useQuery } from "@tanstack/react-query";

export const useAdminReviews = () => {
   const { data, isFetching } = useQuery({
      queryKey: ["get admin reviews"],
      queryFn: () => ReviewService.getAll(),
      select: ({ data }) =>
         data.map((review): IListItem => {
            return {
               id: review.id,
               items: [
                  Array.from({ length: review.rating })
                     .map(() => "⭐")
                     .join(" "),
                  review.user.name,
                  review.user.email,
               ],
            };
         }),
   });

   return {
      data,
      isFetching,
   };
};
