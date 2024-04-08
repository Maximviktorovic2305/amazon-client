// "use client";

import SquareButton from "@/components/ui/button/SquareButton";
import { useCart } from "@/hooks/useCart";
import { useOutside } from "@/hooks/useOutside";
import { convertPrice } from "@/utils/convert-price";
import cn from "clsx";
import Link from "next/link";
import { FC } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import CartItem from "./CartItem";

const Cart: FC = () => {
   const { isShow, setIsShow, ref } = useOutside(false);
   const { items, total } = useCart();

   return (
      <div className="relative" ref={ref}>
         <SquareButton
            Icon={RiShoppingCartLine}
            onClick={() => {
               setIsShow(!isShow);
            }}
            number={items.length}
         />

         {isShow && (
            <div
               className={cn(
                  "absolute animate-scaleIn top-[4.2rem] w-[17rem] -left-[11rem] bg-secondary rounded-xl px-5 py-3 text-sm menu z-20 text-white",
                  isShow ? "block" : "hidden"
               )}>
               <div className="font-normal text-lg mb-5 text-primary">
                  My cart
               </div>
               <div>
                  {items.length ? (
                     items.map((item) => <CartItem item={item} key={item.id} />)
                  ) : (
                     <div className="font-light">Cart is emty!</div>
                  )}
               </div>

               <div>
                  <div className="font-bold mt-6 ">
                     Total: {convertPrice(total)}
                  </div>
               </div>
               {!!items.length && (
                  <div className="text-center mt-7 mb-5">
                     <Link
                        onClick={() => setIsShow(false)}
                        className=" text-gray hover:text-secondary hover:bg-gray rounded duration-200 px-3 py-2"
                        href="/checkout">
                        Go to checkout
                     </Link>
                  </div>
               )}
            </div>
         )}
      </div>
   );
};

export default Cart;
