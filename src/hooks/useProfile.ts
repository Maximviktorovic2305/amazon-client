import UsersService from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";

export const useProfile = () => {
   const { user } = useAuth();

   const { data } = useQuery({
      queryKey: ["get profile"],
      queryFn: UsersService.getProfile,
      select: ({ data }) => data,
      enabled: !!user,
      // throwOnError: (error) => {
      //    console.log(errorCatch(error))
      // }
   });

   return { profile: data };
};
