
import { IListItem } from "@/components/ui/admin/admin-list/admin-list.interface";
import { getAdminURL } from "@/config/url.config";
import OrderService from "@/services/order.service";
import ProductService from "@/services/product/product.service";
import { convertPrice } from "@/utils/convert-price";
import { formateDate } from "@/utils/formate-date";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useAdminOrders = () => {
   const { data, isFetching } = useQuery({
      queryKey: ["get admin orders"],
      queryFn: () => OrderService.getAll(),   
      select: ({ data }) =>
         data.map((order): IListItem => {
            return {
               id: order.id,
               editUrl: getAdminURL(`/orders/edit/${order.id}`),
               items: [
                  `# ${ order.id }`,   
                  order.status,
                  formateDate(order.createdAt),   
                  convertPrice(order.total)
               ],
            };
         }),
   });   

   return {
      data,
      isFetching,
   };
};
