import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants';

const initialState = {
  //   loading: false,
  products: [],
};

export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
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
