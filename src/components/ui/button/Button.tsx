import cn from "clsx";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
   variant: "orange" | "light",   
   size?: 'sm' | 'md' | 'lg'
}

const Button: FC<PropsWithChildren<IButton>> = ({
   children,
   className,
   variant,
   size = 'md',   
   ...rest
}) => {
   return (
      <button
         {...rest}
         className={cn(
            "btn ",
            {
               "btn-orange":
                  variant === "orange",
               "btn-white":
                  variant === "light",   
                  'px-3 py-1 text-sm': size === 'sm',   
                  'btn-large': size === 'lg',   

            },
            className
         )}>
         {children}
      </button>
   );
};

export default Button;
