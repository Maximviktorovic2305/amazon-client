"use client";

import { useActions } from "@/hooks/useActions";
import { useCart } from "@/hooks/useCart";
import { IProduct } from "@/types/product.interface";
import { RiShoppingCartFill, RiShoppingCartLine } from "react-icons/ri";

export default function AddToCartButton({ product }: { product: IProduct }) {
   const { addToCart, removeFromCart } = useActions();
   const { items } = useCart();

   const currentElement = items.find(
      (cartItem: { product: { id: number } }) =>
         cartItem.product.id === product.id
   );

   return (
      <div>
         <button
            className="text-gray"
            onClick={() =>
               currentElement
                  ? removeFromCart({ id: currentElement.id })
                  : addToCart({ product, quantity: 1, price: product.price })
            }>
            {currentElement ? <RiShoppingCartFill /> : <RiShoppingCartLine />}
         </button>
      </div>
   );
}
