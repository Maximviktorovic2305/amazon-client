"use client";

import cn from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./CheckBox.module.scss";

interface ICheckBox {
   isChecked: boolean;
   onClick: () => void;
   className?: string;
}

const CheckBox: FC<PropsWithChildren<ICheckBox>> = ({
   isChecked,
   onClick,
   className,
   children,
}) => {
   return (
      <button className={cn(styles.checkbox, className)} onClick={onClick}>
         <span className={cn({ [styles.active]: isChecked })} />
         <span>{children}</span>
      </button>
   );
};

export default CheckBox;
