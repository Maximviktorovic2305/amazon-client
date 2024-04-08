import Catalog from "@/components/ui/catalog/Catalog";
import CategoryService from "@/services/category.service";
import ProductService from "@/services/product/product.service";
import { IPageSlugParam, TypeParamSlug } from "@/types/page-params";

export const revalidate = 60;


import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: IPageSlugParam): Promise<Metadata> {
  const { category, products } = await getProducts(params);   

  return {
    title: category.name,   
    description: `Description about ${category.name}`,   
    openGraph: {
      images: products[0]?.images || [],   
      description: `Description about ${category.name}`
    }
  }
}

export async function generateStaticParams() {
   const categories = await CategoryService.getAll();

   const paths = categories.data.map((category) => {
      return {
         params: { name: category.name },
      };
   });

   return paths;
}

async function getProducts(params: TypeParamSlug) {
   const { data: products } = await ProductService.getByCategory(
      params?.name as string
   );

   const { data: category } = await CategoryService.getByName(
      params?.name as string
   );

   return {
      products,
      category,
   };
}

export default async function CategoryPage({ params }: IPageSlugParam) {
   const data = await getProducts(params);

   return (
         <Catalog products={data.products || []} title={data.category.name} />
   );
}
