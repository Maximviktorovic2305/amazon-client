import { axiosClassic, instanse } from "@/api/api.interceptor";
import { IProduct, TypePaginationProducts } from "@/types/product.interface";
import {
   PRODUCT,
   TypeProductData,
   // TypeProductDataFilters,
} from "./product.types";

export const ProductService = {
   async getAll(queryData = {} as any) {
      const { data } = await axiosClassic<TypePaginationProducts>({
         url: PRODUCT,
         method: "GET",
         params: queryData,
      });   
      return data
   },

   async getSimilar(id: string | number) {
      return axiosClassic<IProduct[]>({
         url: `${PRODUCT}/similar/${id}`,
         method: "GET",
      });
   },

   async getBySlug(slug: string) {
      const { data } = await axiosClassic<IProduct>({
         url: `${PRODUCT}/by-slug/${slug}`,
         method: "GET",
      });   

      return data
   },

   async getByCategory(categorySlug: string) {
      return axiosClassic<IProduct[]>({
         url: `${PRODUCT}/by-category/${categorySlug}`,
         method: "GET",
      });
   },

   async getById(id: string | number) {
      return instanse<IProduct>({
         url: `${PRODUCT}/${id}`,
         method: "GET",
      });
   },   

   async getByName(name: string) {
      return axiosClassic<IProduct>({
         url: `${PRODUCT}/by-name/${name}`,
         method: "GET",   
      });
   },  

   async create() {
      return instanse<IProduct>({
         url: PRODUCT,
         method: "POST",
      });
   },

   async update(id: string | number, data: TypeProductData) {
      return instanse<IProduct>({
         url: `${PRODUCT}/${id}`,
         method: "PUT",
         data,
      });
   },

   async delete(id: string | number) {
      return axiosClassic<IProduct>({
         url: `${PRODUCT}/${id}`,
         method: "DELETE",
      });
   },   


};

export default ProductService;
