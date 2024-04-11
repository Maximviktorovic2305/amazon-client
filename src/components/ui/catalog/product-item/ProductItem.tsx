import { IProduct } from "@/types/product.interface";
import { convertPrice } from "@/utils/convert-price";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import AddToCartButton from "./AddToCartButton";
import FavoriteButton from "./FavoriteButton";
import ProductRating from "./ProductRating";

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
   return (
      <div className="animate-scaleIn">
         <div className="rounded-xl relative overflow-hidden bg-[#1d232a]">
            <div className="absolute top-2 right-3 z-10">
               <FavoriteButton productId={product.id} />
               <AddToCartButton product={product} />
            </div>
            <Link href={`/product/${product.slug}`}>
               <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="mx-auto hover:scale-105 duration-500 bg-[#1d232a]"
               />
            </Link>
         </div>
         <Link href={`/product/${product.slug}`}>
            <h3 className="mt-2 font-semibold text-black">{product.name}</h3>
         </Link>
         <Link href={`/categories/${product.category.name}`}>
            {" "}
            <div className="text-aqua text-xs ">
               {product.category.name}
            </div>{" "}
         </Link>
         <ProductRating product={product} isText />
         <div className="text-xl font-semibold text-black">
            {convertPrice(product.price)}
         </div>
      </div>
   );
};

export default ProductItem;
