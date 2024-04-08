"use client";

import { useDebounce } from "@/hooks/useDebounce";
import { FC, useEffect, useState } from "react";
import styles from "./Range.module.scss";

interface IRange {
   min?: number;
   max?: number;
   fromInitialValue?: string;
   toInitialValue?: string;
   onChangeFromValue: (value: string) => void;
   onChangeToValue: (value: string) => void;
}

const Range: FC<IRange> = ({
   min = 0,
   max,
   fromInitialValue,
   toInitialValue,
   onChangeFromValue,
   onChangeToValue,
}) => {
   const [fromValue, setFromValue] = useState(fromInitialValue || "");
   const [toValue, setToValue] = useState(toInitialValue || "");

   const debouncedFromValue = useDebounce(fromValue, 500);
   const debouncedToValue = useDebounce(toValue, 500);

   useEffect(() => {
      onChangeFromValue(debouncedFromValue);
   }, [debouncedFromValue]);

   useEffect(() => {
      onChangeToValue(debouncedToValue);
   }, [debouncedToValue]);

   return (
      <div className={styles.range}>
         <input
            min={min}
            max={max}
            placeholder="from"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            type="number"
         />
         {" - "}
         <input
            min={min}
            max={max}
            placeholder="to"
            value={toValue}
            onChange={(e) => setToValue(e.target.value)}
            type="number"
         />
      </div>
   );
};

export default Range;
