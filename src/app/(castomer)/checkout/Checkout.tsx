"use client";

import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/button/Button";
import ProductItem from "@/components/ui/catalog/product-item/ProductItem";
import { useActions } from "@/hooks/useActions";
import { useCart } from "@/hooks/useCart";
import OrderService from "@/services/order.service";
import { IProduct } from "@/types/product.interface";
import { convertPrice } from "@/utils/convert-price";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FC } from "react";
import CheckOutItem from "./CheckOutItem";
import styles from "./Checkout.module.scss";

const Checkout: FC<{ products: IProduct[] }> = ({ products = [] }) => {
   const { items, total } = useCart();
   const { reset } = useActions();
   const { push } = useRouter();

   const { mutate } = useMutation({
      mutationKey: ["create order and payment"],
      mutationFn: () =>
         OrderService.place({
            items: items.map((item) => ({
               price: item.price,
               quantity: item.quantity,
               productId: item.product.id,
            })),
         }),
      onSuccess: ({ data }) => {
         reset();
         push(data.confirmation.confirmation_url);
      },
   });

   return (
      <>
         {items.length ? (
            <section className={styles.checkout}>
               <div className="text-black">
                  <Heading className="mb-6">Checkout</Heading>
                  <div className={styles.list}>
                     {items.map((item) => (
                        <CheckOutItem key={item.id} product={item.product} />
                     ))}
                  </div>
                  <div className={styles.footer}>
                     <div className={styles.total}>
                        <div>Total Cost</div>
                        <div>{convertPrice(total)}</div>
                     </div>
                     <button
                        className="mt-7 mb-2 text-black inline-block px-3 py-2 hover:bg-gray hover:text-secondary rounded duration-200"
                        onClick={() => mutate()}>
                        Place Order
                     </button>
                  </div>
               </div>
               <div>
                  <Heading className="mb-6 text-2xl text-black">
                     Recommended products
                  </Heading>
                  <div className={styles.recommended}>
                     {products
                        .filter(
                           (product) =>
                              !items
                                 .map((item) => item.product.id)
                                 .includes(product.id)
                        )
                        .slice(0, 2)
                        .map((product) => (
                           <ProductItem product={product} key={product.id} />
                        ))}
                  </div>
               </div>
            </section>
         ) : (
            <div>Fill your cart first</div>
         )}
      </>
   );
};

export default Checkout;
