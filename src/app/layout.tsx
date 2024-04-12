import "@/assets/styles/globals.scss";

import Providers from "@/providers/Providers";
import type { PropsWithChildren } from "react";

import Header from "./layout/header/Header";
import SideBar from "./layout/sidebar/SideBar";

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
   return (
      <html lang="en">
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
