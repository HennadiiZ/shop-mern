import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
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

    //   return {
    //     ...state,
    //     cart: [...state.cartItems, action.payload], // Add the new item to the existing cart
    //   };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cart: state.cartItems.filter((item) => item.id !== action.payload), // Remove the item with the specified id
      };
    default:
      return state;
  }
};

//

// export const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CART_ADD_ITEM:
//       return {
//         ...state,
//         cart: [...state.cartItems, action.payload], // Add the new item to the existing cart
//       };
//     case CART_REMOVE_ITEM:
//       return {
//         ...state,
//         cart: state.cartItems.filter((item) => item.id !== action.payload), // Remove the item with the specified id
//       };
//     default:
//       return state;
//   }
// };
