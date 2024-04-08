
import { IListItem } from "@/components/ui/admin/admin-list/admin-list.interface";
import { getAdminURL } from "@/config/url.config";
import ProductService from "@/services/product/product.service";
import { formateDate } from "@/utils/formate-date";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useAdminProducts = () => {
   const { data, isFetching, refetch } = useQuery({
      queryKey: ["get admin products"],
      queryFn: () => ProductService.getAll(),   
      select: (data) =>
         data.products.map((product): IListItem => {
            return {
               id: product.id,
               viewUrl: `/product/${product.slug}`,
               editUrl: getAdminURL(`/products/edit/${product.id}`),
               items: [
                  product.name,
                  product.category.name,
                  formateDate(product.createdAt),
               ],
            };
         }),
   });   


   const { mutate } = useMutation({
      mutationKey: ["delete product"],
      mutationFn: (id: number) => ProductService.delete(id),
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
