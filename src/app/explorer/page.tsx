import ProductService from "@/services/product/product.service";
import ProductExplorer from "./ProductExplorer";

async function getProducts(searchParams: any) {
   const data = await ProductService.getAll(searchParams);

   return data;
}

export default async function ExplorerPage(searchParams: any) {
   const data = await getProducts(searchParams);

   return <ProductExplorer initialProducts={data} />;
}
