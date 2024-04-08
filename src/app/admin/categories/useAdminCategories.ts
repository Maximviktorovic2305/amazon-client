
import { IListItem } from "@/components/ui/admin/admin-list/admin-list.interface";
import { getAdminURL } from "@/config/url.config";
import CategoryService from "@/services/category.service";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useAdminCategories = () => {
   const { data, isFetching, refetch } = useQuery({
      queryKey: ["get admin categories"],
      queryFn: () => CategoryService.getAll(),   
      select: ({ data }) =>
         data.map((category): IListItem => {
            return {
               id: category.id,
               viewUrl: `/category/${category.name}`,
               editUrl: getAdminURL(`/categories/edit/${category.id}`),
               items: [
                  category.name,
               ],
            };
         }),
   });   


   const { mutate } = useMutation({
      mutationKey: ["delete category"],
      mutationFn: (id: number) => CategoryService.delete(id),
      onSuccess() {
         refetch();
      },
   });

   return {
      mutate,
      data,
      isFetching,
   };
};
