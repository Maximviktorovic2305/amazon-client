"use client";

import Heading from "@/components/ui/Heading";
import ProductService from "@/services/product/product.service";
import { IProduct } from "@/types/product.interface";
import { useQuery } from "@tanstack/react-query";
import ProductGallary from "./ProductGallary";
import ProductReviewsCount from "./ProductReviewsCount";
import SimilarProducts from "./SimilarProducts";
import ProductInformation from "./product-information/ProductInformation";
import ProductReviews from "./product-reviews/ProductReviews";

interface IProductPage {
   initialProduct: IProduct;
   similarProducts: IProduct[];
   slug?: string;
}

export default function Product({
   initialProduct,
   similarProducts,
   slug,
}: IProductPage) {
   const { data: product } = useQuery({
      queryKey: ["get product", initialProduct.id],
      queryFn: () => ProductService.getBySlug(slug || ""),
      initialData: initialProduct,
      enabled: !!slug,
   });

   return (
      <>
         <Heading className="mb-1 text-black">{product.name}</Heading>
         <ProductReviewsCount product={product} />
         <div
            className="grid gap-12 mt-6"
            style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
            <ProductGallary images={product.images} />
            <div className="opaciry-80 font-light text-black">
               <div className="font-semibold mb-1">Description:</div>
               {product.description}
            </div>
            <ProductInformation product={product} />
         </div>
         <SimilarProducts similarProducts={similarProducts} />
         <ProductReviews reviews={product.reviews} productId={product.id} />
      </>
   );
}
