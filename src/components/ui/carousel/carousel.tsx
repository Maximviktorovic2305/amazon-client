"use client";

import { useTypedSelector } from "@/hooks/useTypedSelector";
import cn from "clsx";
import Link from "next/link";
import { FC } from "react";
import { TransitionGroup } from "react-transition-group";
import CSSTransition from "../CSSTransition";
import CarouselNavigation from "./CarouselNavigation";
import { ICarouselItem } from "./carousel.interface";
import styles from "./carousel.module.scss";

interface ICarousel {
   items: ICarouselItem[];
   className?: string;
}

const Carousel: FC<ICarousel> = ({ items, className = "" }) => {
   const { selectedItemIndex } = useTypedSelector((state) => state.carousel);

   const selectedItem = items[selectedItemIndex];

   return (
      <section className={cn(className, "relative")}>
         <CarouselNavigation />
         <TransitionGroup className="relative h-56">
            <CSSTransition
               key={selectedItem.title}
               timeout={500}
               classNames={{
                  enter: styles["item-enter"],
                  enterActive: styles["item-enter-active"],
                  exit: styles["item-exit"],
                  exitActive: styles["item-exit-active"],
               }}
               unmountOnExit
               mountOnEnter>
               <div
                  className={styles.item}
                  style={
                     selectedItem.image
                        ? { backgroundImage: `url(${selectedItem.image})` }
                        : {}
                  }>
                  <h2>{selectedItem.title}</h2>
                  <p>{selectedItem.description}</p>
                  {selectedItem.link ? (
                     <Link href={selectedItem.link} className="btn btn-white">
                        Read more
                     </Link>
                  ) : (
                     <Link
                        href="/explorer"
                        className="  bg-black border border-gray py-2 px-3 rounded hover:bg-gray duration-200 hover:scale-105 glow-on-hover">
                        Browse products
                     </Link>
                  )}
               </div>
            </CSSTransition>
         </TransitionGroup>
      </section>
   );
};

export default Carousel;
