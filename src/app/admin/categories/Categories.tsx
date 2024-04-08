"use client";

import Heading from "@/components/ui/Heading";
import AdminList from "@/components/ui/admin/admin-list/AdminList";
import { FC } from "react";
import { useAdminCategories } from "./useAdminCategories";

const Categories: FC = () => {
   const { data, isFetching, mutate } = useAdminCategories();

   return (
      <>
         <Heading className="mb-7">Categories</Heading>
         <AdminList
            isLoading={isFetching}
            listItems={data}
            removeHandler={mutate}
         />
      </>
   );
};

export default Categories;
