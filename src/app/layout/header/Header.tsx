"use client";

import { useAuth } from "@/hooks/useAuth";
import { useIsAdminPanel } from "@/hooks/useIsAdminPanel";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import HeaderProfile from "./HeaderProfile";
import Search from "./Search";
import HeaderCart from "./cart/cart-item/HeaderCart";

const Header: FC = () => {
   const { isAdminPanel } = useIsAdminPanel();
   const { user } = useAuth();

   return (
      <header
         className="bg-secondary w-full py-3 px-2 pl-9 grid items-center"
         style={{ gridTemplateColumns: "0.67fr 3fr 1.2fr" }}>
         <Link href="/">
            {isAdminPanel ? (
               <h2 className="text-2xl text-white font-semibold pr-2">
                  Admin Panel
               </h2>
            ) : (
               <Image
                  priority
                  width={90}
                  height={70}
                  src={"/images/logo.png"}
                  alt="Ecommerce app"
               />
            )}
         </Link>

         <Search />

         <div className="flex items-center justify-end gap-7 mr-4">
            {user?.isAdmin && !isAdminPanel && (
               <Link
                  href="/admin"
                  className="hover:text-primary transition-colors duration-200 text-white inline-block text-lg">
                  <MdOutlineAdminPanelSettings size={25} />
               </Link>
            )}
            <Link href={"/favorites"} className="text-white">
               <AiOutlineHeart size={25} />
            </Link>
            <HeaderCart />
            <HeaderProfile />
         </div>
      </header>
   );
};

export default Header;
