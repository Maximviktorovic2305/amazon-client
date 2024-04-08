"use client";

import Heading from "@/components/ui/Heading";
import OrderService from "@/services/order.service";
import { useQuery } from "@tanstack/react-query";

interface IMyOrders {}

export default function MyOrders({}: IMyOrders) {
   const { data: orders } = useQuery({
      queryKey: ["my orders"],
      queryFn: () => OrderService.getByUserId(),
      select: ({ data }) => data,
   });

   return (
      <>
         <Heading>My orders</Heading>
         <section>
            {orders?.length ? (
               orders?.map((order) => (
                  <div
                     className="bg-white shadow flex rounded-lg gap-7 p-7 my-7"
                     key={order.id}>
                     <span>#{order.id}</span>
                     <span>{order.status}</span>
                     <span>
                        {new Date(order.createdAt).toLocaleDateString("ru-Ru")}
                     </span>
                     <span>{order.total}</span>
                  </div>
               ))
            ) : (
               <div>Заказов нет</div>
            )}
         </section>
      </>
   );
}
