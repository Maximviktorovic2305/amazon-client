import { useActions } from "@/hooks/useActions";
import { useCart } from "@/hooks/useCart";
import { ICartItem } from "@/types/cart.interface";
import { FC } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";   
import { MdRestoreFromTrash } from "react-icons/md";

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
   const { removeFromCart, changeQuantity } = useActions();

   const { items } = useCart();
   const quantity = items.find((cartItem) => cartItem.id === item.id)?.quantity;

   return (
      <div className="mt-3">
         <div className="flex items-center gap-3">
            <button
               onClick={() => changeQuantity({ id: item.id, type: "minus" })}
               disabled={quantity === 1}>
               <AiFillMinusCircle size={13} />
            </button>   

            <input disabled readOnly value={quantity} className="w-10 bg-black text-center" />   

            <button onClick={() => changeQuantity({ id: item.id, type: 'plus' })}>
                <AiFillPlusCircle size={13} />
            </button>   

            <button onClick={() => removeFromCart({ id: item.id })} className="ml-3 text-red">
                <MdRestoreFromTrash size={15} />
            </button>  

         </div>
      </div>
   );
};

export default CartActions;
