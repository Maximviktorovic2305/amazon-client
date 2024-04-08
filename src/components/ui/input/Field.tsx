import cn from "clsx";
import { forwardRef } from "react";
import { IField } from "./field.interface";

const Field = forwardRef<HTMLInputElement, IField>(
   (
      { Icon, placeholder, error, className, type = "text", style, ...rest },
      ref
   ) => {
      return (
         <div className={cn("mb-4", className)} style={style}>
            <label>
               <span className="block mb-1">
                  {Icon && <Icon />}
                  {placeholder}
               </span>
               <input   
               placeholder={placeholder}
                  ref={ref}
                  type={type}
                  {...rest}
                  className={cn(
                     "px-4 py-2 w-full outline-none placeholder:font-normal border border-gray border-solid rounded focus:border-primary transition-all",
                     {
                        "border-red": error,
                     }
                  )}
               />
            </label>
            {error && <div className="text-red text-sm">{error}</div>}
         </div>
      );
   }
);
Field.displayName = "Field";
export default Field;
