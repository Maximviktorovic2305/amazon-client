"use client";

import { useCategories } from "@/hooks/queries/useCategory";
import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { useIsAdminPanel } from "@/hooks/useIsAdminPanel";
import { FC } from "react";

const SideBar: FC = () => {
   const { data, isLoading } = useCategories();

   const { user } = useAuth();
   const { logout } = useActions();
   const { isAdminPanel, pathname } = useIsAdminPanel();

   return (
      // <aside
      //    className="flex flex-col justify-between bg-secondary w-full z-10"
      //    style={{ height: "100%" }}>
      //    <div>
      //       {isLoading ? (
      //          <Loader />
      //       ) : data ? (
      //          <>
      //             <div className="text-xl text-white mt-3 mb-5 ml-6 font-bold">
      //                {isAdminPanel ? "Menu:" : "Categories:"}
      //             </div>
      //             <ul>
      //                {(isAdminPanel
      //                   ? ADMIN_MENU
      //                   : convertToMenuItems(data)
      //                ).map((item) => (
      //                   <li key={item.href}>
      //                      <Link
      //                         href={item.href}
      //                         className={cn(
      //                            "block text-lg my-3 px-8 hover:text-primary transition-colors duration-200",
      //                            pathname === item.href
      //                               ? "text-primary"
      //                               : "text-white"
      //                         )}>
      //                         {item.label}
      //                      </Link>
      //                   </li>
      //                ))}
      //             </ul>
      //          </>
      //       ) : (
      //          <div> Categories not found! </div>
      //       )}
      //    </div>

      //    {!!user && (
      //       <button
      //          className="text-white flex items-center ml-8 mb-3"
      //          onClick={() => logout()}>
      //          <RiLogoutBoxLine />
      //          <span className="ml-2">Logout</span>
      //       </button>
      //    )}
      // </aside>
      <div className=" flex flex-col gap-1">
         <div className=" flex flex-col gap-3">
            <h1 className="div-anim">Frontend:</h1>
            <div className="div-anim1 pl-10 mb-3">
               <a href="https://react.dev/">
                  <img
                     width={50}
                     height={50}
                     src="/images/links/react.png"
                     alt="#"
                  />
               </a>
            </div>
            <div className="div-anim2 pl-10 mb-3">
               <a href="https://react.dev/learn/typescript">
                  <img
                     width={50}
                     height={50}
                     src="/images/links/ts.png"
                     alt="#"
                  />
               </a>
            </div>
            <div className="div-anim3 pl-10 mb-3">
               <a href="https://redux-toolkit.js.org/">
                  <img
                     width={50}
                     height={50}
                     src="/images/links/redux.png"
                     alt="#"
                  />
               </a>
            </div>
            <div className="div-anim4 pl-10 mb-3">
               <a href="https://tailwindcss.com/docs/guides/create-react-app">
                  <img
                     width={50}
                     height={50}
                     src="/images/links/tw.png"
                     alt="#"
                  />
               </a>
            </div>
         </div>
         <div className=" flex flex-col gap-3">
            <h1 className="div-anim">Backend:</h1>
            <div className="div-anim1 pl-10 mb-3">
               <a href="https://nestjs.com/">
                  <img
                     width={50}
                     height={50}
                     src="/images/links/nest.png"
                     alt="#"
                  />
               </a>
            </div>
            <div className="div-anim2 pl-10 mb-3">
               <a href="https://react.dev/learn/typescript">
                  <img
                     width={50}
                     height={50}
                     src="/images/links/ts.png"
                     alt="#"
                  />
               </a>
            </div>
            <div className="div-anim3 pl-10 mb-3">
               <a href="https://www.postgresql.org/">
                  <img
                     width={50}
                     height={50}
                     src="/images/links/postgres.png"
                     alt="#"
                  />
               </a>
            </div>
            <div className="div-anim4 pl-10 mb-3">
               <a href="https://www.prisma.io/">
                  <img
                     width={50}
                     height={50}
                     src="/images/links/prisma.png"
                     alt="#"
                  />
               </a>
            </div>
         </div>
      </div>
   );
};

export default SideBar;
