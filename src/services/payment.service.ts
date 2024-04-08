import { instanse } from "@/api/api.interceptor";
import { IPaymentResponse } from "@/types/peymant.interface";

const PAYMENT = "payment";

export const PaymentService = {
   async createPayment(amount: number) {
      return instanse.post<IPaymentResponse>(PAYMENT, {
         amount,
      });

   },
};

export default PaymentService;
