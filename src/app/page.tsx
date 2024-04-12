import Home from "@/app/(castomer)/Home";
import ProductService from "@/services/product/product.service";

async function getProducts() {
   const data = await ProductService.getAll({
      page: 1,
      perPage: 8,
      ratings: "",
   });

   return data;
}

export default async function HomePage() {
   const data = await getProducts();

   return <Home products={data.products} length={data.length} />;
}
