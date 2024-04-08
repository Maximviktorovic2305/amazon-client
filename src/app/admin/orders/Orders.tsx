"use client";

import Heading from "@/components/ui/Heading";
import AdminList from "@/components/ui/admin/admin-list/AdminList";
import { FC } from "react";
import { useAdminOrders } from "./useAdminOrders";

const Orders: FC = () => {
   const { data, isFetching } = useAdminOrders();

   return (
      <div style={{ height: '100vh' }}>
         <Heading className="mb-7">Orders</Heading>
         <AdminList isLoading={isFetching} listItems={data} />
      </div>
   );
};

export default Orders;
