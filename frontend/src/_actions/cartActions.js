// cartActions.js
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';
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

// Action to remove an item from the cart
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  // Save the updated cart to local storage
  //   localStorage.removeItem(
  //     'cartItems',
  //     JSON.stringify(getState().cart.cartItems)
  //   );
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
