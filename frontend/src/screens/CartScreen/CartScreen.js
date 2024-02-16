import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link, useLocation } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button } from 'react-bootstrap';
import { addToCart, removeFromCart } from '../../_actions/cartActions';
import Message from '../../components/Message/Message';

const CartScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const location = useLocation();
  const queryString = location.search;
  const searchParams = new URLSearchParams(location.search);

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

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const checkoutHandler = () => {
    navigate('/login?redirect=shipping');
  };

  return (
    <Row>
      <Col md={8}>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                {/*  */}
                <Row>
                  <Col md={4}>
                    <Image
                      src={item.image}
                      // style={{ width: '200px' }}
                      fluid
                      rounded
                    />
                  </Col>
                  <Col md={6}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                    <p>Quantity: {item.quantity}</p>
                    <p>$ {item.price}</p>
                    {/*  */}
                    <Form.Control
                      as='select'
                      value={item.quantity}
                      onChange={(e) =>
                        dispatch(addToCart(item.product, +e.target.value))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </Form.Control>
                    {/*  */}
                    <Button
                      style={{ marginTop: '15px' }}
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
                {/*  */}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h2>
              Subtotal&nbsp;
              {cartItems.reduce((acc, item) => +acc + +item.quantity, 0)} items
            </h2>
            $
            {cartItems
              .reduce((acc, item) => +acc + +item.quantity * +item.price, 0)
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
