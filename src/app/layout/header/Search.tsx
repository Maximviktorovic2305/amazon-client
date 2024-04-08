// import { useRouter } from "next/navigation";
import { FC } from "react";
import { MdSearch } from "react-icons/md";

const Search: FC = () => {
   // const [searchTerm, setSearchTerm] = useState<string>("");

   // const { push } = useRouter();

   return (
      <div
         className="'border border-solid border-gray/10 grid w-1/2 rounded-xl overflow-hidden"
         style={{ gridTemplateColumns: "1fr 0.1fr" }}>
         <input
            className="bg-[#22303E] text-sm py-2 px-4 text-white outline-none"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
         />

         <button
            // onClick={() => push(`/explorer?searchTerm=${searchTerm}`)}
            className="bg-primary text-white flex items-center justify-center p-2.5">
            <MdSearch />
         </button>
      </div>
   );
};

export default Search;
