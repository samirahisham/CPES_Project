import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";
import Cart from "../../screens/Cart/Cart";

const intialstate = {
  Cart: [
    {
      item: {
        id: 1,
        name: "food",
        price: 12,
        image_url:
          "https://taw9eelcdn.cachefly.net/media/catalog/product/cache/2/image/519x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_567_100.jpg",
      },

      qauntity: 2,
    },
    {
      item: {
        id: 2,
        name: "food",
        price: 12,
        image_url:
          "https://taw9eelcdn.cachefly.net/media/catalog/product/cache/2/image/519x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_567_100.jpg",
      },

      qauntity: 2,
    },
  ],
};

const CartReducer = (state = intialstate, action) => {
  //   return state;
  //the global state that changed
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        Cart: state.Cart.concat(action.payload),
      };

    case REMOVE_FROM_CART:
      console.log("Remove", action);
      let filteredItems = state.Cart.filter(
        (cartObj) => cartObj !== action.payload
      );
      return {
        Cart: filteredItems,
      };
    default:
      return state;
  }
};

export default CartReducer;
