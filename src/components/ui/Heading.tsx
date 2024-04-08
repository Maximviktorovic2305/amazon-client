import { FC, PropsWithChildren } from "react";

interface IHeading {
   className?: string;
}

const Heading: FC<PropsWithChildren<IHeading>> = ({ children, className }) => {
   return (
      <h1 className={`text-opacity-80 font-semibold text-3xl ${className}`}>
         {children}
      </h1>
   );
};

export default Heading;
