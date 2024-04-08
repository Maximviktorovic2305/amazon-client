import Heading from "@/components/ui/Heading";
import ProductItem from "@/components/ui/catalog/product-item/ProductItem";
import { IProduct } from "@/types/product.interface";

interface ISimilarProducts {
   similarProducts: IProduct[];
}

export default function SimilarProducts({ similarProducts }: ISimilarProducts) {
   return (
      <div className="mt-20 text-black">
         <Heading className="mb-7">Similar products</Heading>
         {similarProducts.length ? (
            <div className="grid grid-cols-4 gap-10">
               {similarProducts.map((product) => (
                  <ProductItem key={product.id} product={product} />
               ))}
            </div>
         ) : (
            <div>There are no products</div>
         )}
      </div>
   );
}
