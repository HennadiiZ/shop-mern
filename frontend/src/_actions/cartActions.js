import {
  CART_ADD_ITEM,
  CART_CLEAR_ITEMS,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants';
import axios from 'axios';

// Action to add an item to the cart
export const addToCart = (id, quantity) => async (dispatch, getState) => {
  try {
    // Fetch the product details based on the provided id
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        quantity,
      },
    });

    console.log('Updated cartItems:', getState().cart.cartItems);

    // Save the updated cart to local storage
    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
    //
  } catch (error) {
    dispatch({
      type: CART_ADD_ITEM,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem('paymentMethod', JSON.stringify(data));
};

//----- clear cart, so I do not see orders that I already paid for
export const clearCart = () => (dispatch) => {
  dispatch({
    type: CART_CLEAR_ITEMS,
  });
  localStorage.removeItem('cartItems');
};
