import { axiosClassic, instanse } from "@/api/api.interceptor";
import { ICategory } from "@/types/category.interface";

const CATEGORY = "categories";

export const CategoryService = {
   async getAll() {
      return axiosClassic<ICategory[]>({
         url: CATEGORY,
         method: "GET",
      });
   },

   async getById(id: string | number) {
      const response = await instanse<ICategory>({
         url: `${CATEGORY}/${id}`,
         method: "GET",
      });

      return response.data;
   },

   async getByName(name: string) {
      const response = await axiosClassic<ICategory>({
         url: `${CATEGORY}/name/${name}`,
         method: "GET",
      });

      return response;
   },

   async create() {
      return instanse<ICategory>({
         url: CATEGORY,
         method: "POST",
      });
   },

   async update(id: string | number, name: string) {
      return instanse<ICategory>({
         url: `${CATEGORY}/${id}`,
         method: "PUT",
         data: { name },
      });
   },

   async delete(id: string | number) {
      return instanse<ICategory>({
         url: `${CATEGORY}/${id}`,
         method: "DELETE",
      });
   },
};

export default CategoryService;
