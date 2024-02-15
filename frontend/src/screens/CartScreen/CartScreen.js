import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link, useLocation } from 'react-router';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Cart,
} from 'react-bootstrap';
import { addToCart } from '../../_actions/cartActions';
import Message from '../../components/Message/Message';

// const CartScreen = ({ match, location, history }) => {
const CartScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  //   const productId = id;
  //   const qty = location.search;
  //
  const location = useLocation();
  const queryString = location.search;
  const searchParams = new URLSearchParams(location.search);
  //   const quantity = searchParams.get('qty');
  const quantity = queryString ? +searchParams.get('qty') : 1;

  console.log('searchParams.get(qty):', searchParams.get('qty')); // 1
  console.log('queryString:', queryString); //?qty=1

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, quantity));
    }
  }, [dispatch, id, quantity]);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  //   console.log('cartItems', cartItems);

  const removeFromCartHandler = (productId) => {
    // Implement logic to remove item from the cart
  };

  const checkoutHandler = () => {
    // Redirect to the checkout page or implement your checkout logic
    navigate('/checkout');
  };

  //   return (
  //     <div>
  //       Cart
  //       <Message />
  //     </div>
  //   );

  return (
    <Row>
      <Col md={8}>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <Message>Your cart is empty</Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                {/* Display your cart item details here */}
                <p>{item.name}</p>
                <p>Quantity: {item.qty}</p>
                <Button
                  type='button'
                  variant='light'
                  onClick={() => removeFromCartHandler(item.product)}
                >
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h2>
              Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              items
            </h2>
            $
            {cartItems
              .reduce((acc, item) => acc + item.qty * item.price, 0)
              .toFixed(2)}
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              type='button'
              className='btn-block'
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
            >
              Proceed to Checkout
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
};

export default CartScreen;
