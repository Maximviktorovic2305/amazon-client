import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function NotFound() {
   return (
      <div className="h-screen">
         <Heading> Not Found </Heading>
         <p>
            View{" "}
            <Link href="/" className="text-primary">
               all products
            </Link>
         </p>
      </div>
   );
}
