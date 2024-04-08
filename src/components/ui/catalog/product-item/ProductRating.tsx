"use client";

import { IProduct } from "@/types/product.interface";
import { FC, useState } from "react";
import { Rating } from "react-simple-star-rating";

interface IProductRating {
   product: IProduct;
   isText?: boolean;
}

const ProductRating: FC<IProductRating> = ({ product, isText = false }) => {
   const [rating] = useState<number>(
      Math.round(
         product.reviews.reduce((acc, review) => acc + review.rating, 0) /
            product.reviews.length
      ) || 0
   );

   return (
      <div className="mb-2 flex items-center">
         {!!product.reviews.length && (
            <span className="mr-1 flex items-center">
               <Rating
                  readonly
                  initialValue={rating}
                  SVGstyle={{ display: "inline-block" }}
                  size={20}
                  allowFraction
                  transition
                  fillColor="#7480ff"
               />
               <span className="text-gray text-sm mx-1 mt-1">{rating}</span>
            </span>
         )}
         {isText && (
            <span className="text-xs mt-1">
               ({product.reviews.length} reviews)
            </span>
         )}
      </div>
   );
};

export default ProductRating;
