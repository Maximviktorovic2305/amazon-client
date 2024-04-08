import { instanse } from "@/api/api.interceptor";
import { IFullUser, IUser } from "@/types/user.interface";

const USER = "users";

type TypeData = {
   email: string;
   password?: string;
   name?: string;
   avatarPath?: string;
   phone?: string;
};

export const UsersService = {
   async getProfile() {
      return instanse<IFullUser>({
         url: `${USER}/profile`,
         method: "GET",
      });
   },

   async updateProfile(data: TypeData) {
      const response = await instanse<IUser>({
         url: `${USER}/profile`,
         method: "PUT",
         data,
      });

      return response.data;
   },

   async toggleFavorite(productId: string | number) {
      return instanse<IUser>({
         url: `${USER}/profile/favorites/${productId}`,
         method: "PATCH",
      });
   },
};

export default UsersService;
