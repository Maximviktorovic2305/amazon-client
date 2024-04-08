import { instanse } from "@/api/api.interceptor";
import { ICategory } from "@/types/category.interface";
import { IReview } from "@/types/reviews.interface";

const STATISTIC = "statistics";   

export type TypeStatisticsResponse = {
   name: string   
   value: number
}[]

export const StatisticsService = {
   async getMain() {
      return instanse<TypeStatisticsResponse>({
         url: `${STATISTIC}/main`,
         method: "GET",
      });
   },


};

export default StatisticsService;
