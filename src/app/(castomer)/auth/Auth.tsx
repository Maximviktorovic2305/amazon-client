'use client'

import Heading from "@/components/ui/Heading";
import { Loader } from "@/components/ui/Loader";
import Button from "@/components/ui/button/Button";
import Field from "@/components/ui/input/Field";
import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { IEmailPassword } from "@/store/user/user.interface";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuthRedirect } from "./useAuthRedirect";

const Auth: FC = () => {
   useAuthRedirect();

   const { isLoading } = useAuth();
   const { login, register } = useActions();
   const [type, setType] = useState<"login" | "register">("login");

   const {
      register: formRegister,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm<IEmailPassword>({ mode: "onChange" });

   const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
      if (type === "login") {
         login(data);
      } else {
         register(data);
      }
      reset();
   };

   return (
         <section className="flex h-screen">
            <form
               onSubmit={handleSubmit(onSubmit)}
               className="rounded-lg bg-white shadow-sm p-8 m-auto">
               <Heading className="uppercase text-center mb-4">{type}</Heading>
               {isLoading && <Loader />}
               <Field
                  {...formRegister("email", {
                     required: "Email is required",
                  })}
                  placeholder="Email"
                  error={errors.email?.message}
               />

               <Field
                  {...formRegister("password", {
                     required: "Password is required",
                  })}
                  type="password"
                  placeholder="Password"
                  error={errors.password?.message}
               />
               <Button variant="light">Submit</Button>
               <button
                  type="button"
                  className="inline-block opacity-40 ml-12"
                  onClick={() =>
                     setType(type === "login" ? "register" : "login")
                  }>
                  {type === "login" ? "Register" : "Login"}
               </button>
            </form>
         </section>
   );
};

export default Auth;
