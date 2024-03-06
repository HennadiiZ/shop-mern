// cartReducers.js
import {
  CART_ADD_ITEM,
  CART_CLEAR_ITEMS,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants';

// const initialState = {
//   cartItems: [],
// };

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((i) => i.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === existItem.product ? item : i
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload
        ),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    //----- clear cart, so I do not see orders that I already paid for
    case CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [], // Reset cartItems to an empty array
      };
    //----
    default:
      return state;
  }
};

// export const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CART_ADD_ITEM:
//       const item = action.payload;
//       const existItem = state.cartItems.find((i) => i.product === item.product);

//       if (existItem) {
//         return {
//           ...state,
//           cartItems: state.cartItems.map((i) =>
//             i.product === existItem.product ? item : i
//           ),
//         };
//       } else {
//         return { ...state, cartItems: [...state.cartItems, item] };
//       }

//     case CART_REMOVE_ITEM:
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(
//           (item) => item.product !== action.payload
//         ),
//       };
//     default:
//       return state;
//   }
// };
