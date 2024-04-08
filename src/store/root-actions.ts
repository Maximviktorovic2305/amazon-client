import * as userActions from "./user/user.actions";

import { carouselSlice } from "./carousel/carousel.slice";
import { cartSlice } from "./cart/cart.slice";
import { filtersSlice } from "./filters/filters.slice";

filtersSlice;

export const rootActions = {
   ...userActions,
   ...cartSlice.actions,
   ...carouselSlice.actions,
   ...filtersSlice.actions,
};
