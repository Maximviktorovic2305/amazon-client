interface Amount {
   value: string;
   currency: string;
}

interface Recipient {
   account_id: string;
   gateway_id: string;
}

interface PaymentMethod {
   type: string;
   id: string;
   saved: boolean;
}

interface Confirmation {
   return_url: string;
   type: string;
   confirmation_url: string;
}

export interface IPaymentResponse {
   id: string;
   status: string;
   amount: Amount;
   recipient: Recipient;
   payment__method: PaymentMethod;
   created_at: Date;
   confirmation: Confirmation;
}
