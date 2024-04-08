"use client";

import Heading from "@/components/ui/Heading";
import AdminList from "@/components/ui/admin/admin-list/AdminList";
import { FC } from "react";
import { useAdminReviews } from "./useAdminReviews";

const Reviews: FC = () => {
   const { data, isFetching } = useAdminReviews();

   return (
      <>
         <Heading className="mb-7">Reviews</Heading>
         <AdminList isLoading={isFetching} listItems={data} />
      </>
   );
};

export default Reviews;
