import { instanse } from "@/api/api.interceptor";
import { IOrder } from "@/types/order.interface";

const ORDER = "orders";

enum EnumOrderStatus {
   PENDING = "PENDING",
   PAYED = "PAYED",
   SHIPPED = "SHIPPED",
   DELIVERED = "DELIVERED",
}

type TypeData = {
   status?: EnumOrderStatus;
   items: {
      quantity: number;
      productId: number;
      price: number;
   }[];
};

export const OrderService = {
   async getAll() {
      return instanse<IOrder[]>({
         url: ORDER,
         method: "GET",
      });
   },

   async place(data: TypeData) {
      return instanse<{ confirmation: { confirmation_url: string } }>({
         url: ORDER,
         method: "POST",
         data,
      });
   },

   async getByUserId() {
      return instanse<IOrder[]>({
         url: `${ORDER}/by-user`,
         method: "GET",   
      });
   },
};

export default OrderService;
