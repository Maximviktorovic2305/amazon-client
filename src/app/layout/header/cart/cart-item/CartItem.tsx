import { ICartItem } from "@/types/cart.interface";
import { convertPrice } from "@/utils/convert-price";
import Image from "next/image";
import { FC } from "react";
import CartActions from "./cart-actions/CartActions";

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
   return (
      <div className="mb-4 flex">
         <Image
            src={item.product.images[0]}
            width={100}
            height={100}
            alt={item.product.name}
            className="mb-2 mr-3 rounded"
         />
         <div>
            <div className="text-primary">{item.product.name}</div>
            <div>{convertPrice(item.product.price)}</div>

            <CartActions item={item} />
         </div>
      </div>
   );
};

export default CartItem;
