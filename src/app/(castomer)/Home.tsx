import Carousel from "@/components/ui/carousel/carousel";
import Catalog from "@/components/ui/catalog/Catalog";
import { TypePaginationProducts } from "@/types/product.interface";
import { FC } from "react";
import { carouselItems } from "../carousel.data";

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
   return (
      <>
         <Carousel items={carouselItems} className="mb-10" />
         <Catalog title="Fresh Products" products={products} />
      </>
   );
};

export default Home;
