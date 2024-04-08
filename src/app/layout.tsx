import "@/assets/styles/globals.scss";

import Providers from "@/providers/Providers";
import type { PropsWithChildren } from "react";

import { getSiteUrl } from "@/config/url.config";
import { SITE_NAME } from "@/constants/seo.constants";
import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import Header from "./layout/header/Header";
import SideBar from "./layout/sidebar/SideBar";

export const metadata: Metadata = {
   icons: {
      icon: "favicon.svg",
   },
   title: {
      absolute: SITE_NAME,
      template: `%s | ${SITE_NAME}`,
   },
   metadataBase: new URL(getSiteUrl()),
   openGraph: {
      type: "website",
      siteName: SITE_NAME,
      emails: ["max@mail.ru"],
   },
};

const exo = Exo_2({
   weight: ["400", "500", "600", "700"],
   subsets: ["latin", "cyrillic-ext"],
   display: "swap",
   style: ["normal"],
   variable: "--font-exo",
});

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
   return (
      <html lang="en" className={exo.variable}>
         <body>
            <Providers>
               <div className="bg-secondary">
                  <Header />
                  {/* <div
                     className="grid"
                     style={{ gridTemplateColumns: "0.8fr 4.2fr" }}>
                     <SideBar />
                     <main className="p-8 bg-bg-color rounded-tl-lg">{children}</main>
                  </div> */}
                  <div
                     className="grid py-5"
                     style={{ gridTemplateColumns: "0.8fr 4.2fr" }}>
                     <SideBar />
                     <main className="p-10  bg-bg-color rounded-tl-lg">
                        {children}
                     </main>
                  </div>
               </div>
            </Providers>
            <div id="modal"></div>
         </body>
      </html>
   );
}
