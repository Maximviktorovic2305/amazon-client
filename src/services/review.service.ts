import { axiosClassic, instanse } from "@/api/api.interceptor";
import { IReview } from "@/types/reviews.interface";

const REVIEW = "reviews";

type TypeData = {
   rating: number;
   text: string;
};

export const ReviewService = {
   async getAll() {
      return instanse<IReview[]>({
         url: REVIEW,
         method: "GET",
      });
   },

   async leave(productId: string | number, data: TypeData) {
      return instanse<IReview>({
         url: `${REVIEW}/leave/${productId}`,
         method: "POST",
         data,
      });
   },

   async getAverageByProduct(productId: string | number) {
      return axiosClassic<number>({
         url: `${REVIEW}/average-by-product/${productId}`,
         method: "GET",
      });
   },
};

export default ReviewService;
