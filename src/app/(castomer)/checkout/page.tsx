import ProductService from "@/services/product/product.service";
import Checkout from "./Checkout";

async function getProducts() {
   const data = await ProductService.getAll({
      page: 1,
      perPage: 20,
      ratings: "",
   });

   return data;
}

export default async function CheckoutPage() {
   const data = await getProducts();

   return <Checkout products={data.products} />;
}
