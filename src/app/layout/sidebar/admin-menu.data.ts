import { getAdminURL } from "@/config/url.config";
import { IMenuItem } from "./menu.interface";

export const ADMIN_MENU: IMenuItem[] = [
   {
      label: "Dashboard",
      href: getAdminURL(),
   },
   {
      label: "Products",
      href: getAdminURL("/products"),
   },
   {
      label: "Categories",
      href: getAdminURL("/categories"),
   },
   {
      label: "Reviews",
      href: getAdminURL("/reviews"),
   },
   {
      label: "Orders",
      href: getAdminURL("/orders"),
   },
];
