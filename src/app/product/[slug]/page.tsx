import ProductService from "@/services/product/product.service";
import { IPageSlugParam, TypeParamSlug } from "@/types/page-params";
import Product from "./Product";

// export const dynamicParams = false
// export const dynamicParams = true
// export const dynamic = 'force-dynamic'
// export const dynamic = 'force-static'


export async function generateStaticParams() {
   const response = await ProductService.getAll();

   const paths = response.products.map((product) => {
      return {
         params: { slug: product.slug },
      };
   });

   return paths;
}

async function getProduct(params: TypeParamSlug) {
   const product = await ProductService.getBySlug(params.slug as string);

   const { data: similarProducts } = await ProductService.getSimilar(
      product.id
   );

   return {
      product,
      similarProducts,
   };
}

export default async function ProductPage({ params }: IPageSlugParam) {
   const { product, similarProducts } = await getProduct(params);

   return (
      <Product
         initialProduct={product}
         similarProducts={similarProducts}
         slug={params.slug}
      />
   );
}
