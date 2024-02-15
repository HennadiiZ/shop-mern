import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants';

const initialState = {
  products: [],
};

export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, product: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: true, product: [] };
    case PRODUCT_LIST_FAIL:
      return { loading: true, product: [] };
    default:
      return state;
  }
};

// export const productListReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'PRODUCT_LIST_REQUEST':
//       return { loading: true, product: [] };
//     case 'PRODUCT_LIST_SUCCESS':
//       return { loading: true, product: [] };
//     case 'PRODUCT_LIST_FAIL':
//       return { loading: true, product: [] };
//     default:
//       return state;
//   }
// };
