import { FC } from "react";

export const Loader: FC = () => {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="h-[70px] w-[70px] ml-[75px]">
         <linearGradient id="a10">
            <stop offset="0" stop-color={"#FF9902"} stop-opacity="0"></stop>
            <stop offset="1" stop-color={"#FF9902"}></stop>
         </linearGradient>
         <circle
            fill="none"
            stroke="url(#a10)"
            stroke-width="15"
            stroke-linecap="round"
            stroke-dasharray="0 44 0 44 0 44 0 44 0 360"
            cx="100"
            cy="100"
            r="70"
            transform-origin="center">
            <animateTransform
               type="rotate"
               attributeName="transform"
               calcMode="discrete"
               dur="2"
               values="360;324;288;252;216;180;144;108;72;36"
               repeatCount="indefinite"></animateTransform>
         </circle>
      </svg>
   );
};
