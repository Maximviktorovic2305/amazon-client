"use client";

import Heading from "@/components/ui/Heading";
import { Loader } from "@/components/ui/Loader";
import StatisticsService from "@/services/statistics.service";
import { convertPrice } from "@/utils/convert-price";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import styles from "./Dashboard.module.scss";

const Dashboard: FC = () => {
   const { data, isFetching } = useQuery({
      queryKey: ["statistics"],
      queryFn: () => StatisticsService.getMain(),
      select: ({ data }) => data,
   });

   return (
      <div className="h-screen">
         <Heading className="mb-8">Dashboard</Heading>
         {isFetching ? (
            <Loader />
         ) : data?.length ? (
            <div className={styles.wrapper}>
               {data?.map((item, index) => (
                  <div key={item.name} className={styles.item}>
                     <div>{item.name}</div>
                     <div>
                        {index === data?.length - 1
                           ? convertPrice(item.value || 0)
                           : item.value}
                     </div>
                  </div>
               ))}
            </div>
         ) : (
            <div>Statistics not loaded</div>
         )}
      </div>
   );
};

export default Dashboard;
