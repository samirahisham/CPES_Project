import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const removeCartAction = (item) => ({
  type: REMOVE_FROM_CART,
  payload: item,
});
// console.log("action", item),

export const addCartAction = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});
