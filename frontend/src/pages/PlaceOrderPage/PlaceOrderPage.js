import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import {
  Button,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  Avatar,
  Card,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message/Message';
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps';
import { createOrder } from '../../_actions/orderActions';

const PlaceOrderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  //   Calculate prices
  const addDecimals = (num) => {
    return isNaN(num)
      ? '0.00'
      : (Math.round(parseFloat(num) * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce(
      (acc, item) => acc + parseFloat(item.price) * parseFloat(item.quantity),
      0
    )
  );
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100);
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
    }
    // eslint-disable-next-line
  }, [navigate, success]);

  const placeOrderHandler = () => {
    console.log('order');
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  return (
    <>
      {/* <CheckoutSteps step1 step2 step3 step4 /> */}
      <Grid
        sx={{
          // backgroundColor: '#f4f4f4',
          borderRadius: 2,
          marginTop: 3,
          padding: 3,
          marginLeft: -2,
          paddingBottom: 0,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CheckoutSteps step1 step2 step3 step4 />
      </Grid>
      <Grid container spacing={3}>
        <Grid item md={8}>
          <Paper sx={{ p: 3, borderRadius: 2, backgroundColor: '#f4f4f4' }}>
            <Typography variant='h4'>Shipping</Typography>
            <Typography>
              <strong>Address:</strong>
              {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
              {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
            </Typography>
            {/* ... (Other Shipping Details) */}
          </Paper>

          <Paper
            sx={{ mt: 2, p: 3, borderRadius: 2, backgroundColor: '#f4f4f4' }}
          >
            <Typography variant='h4'>Payment Method</Typography>
            <Typography>
              <strong>Method: </strong>
              {cart.paymentMethod}
            </Typography>
          </Paper>

          <Paper
            sx={{ mt: 2, p: 3, borderRadius: 2, backgroundColor: '#f4f4f4' }}
          >
            <Typography variant='h4'>Order Items</Typography>
            {cart.cartItems.length === 0 ? (
              <Message>Your cart is empty</Message>
            ) : (
              <List>
                {cart.cartItems.map((item, index) => (
                  <ListItem key={index}>
                    <Grid container alignItems='center'>
                      <Grid item md={1}>
                        <Avatar
                          src={item.image}
                          alt={item.name}
                          variant='rounded'
                        />
                      </Grid>
                      <Grid item>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Grid>
                      <Grid
                        item
                        md={4}
                        sx={{
                          marginLeft: 2,
                        }}
                      >
                        {item.quantity} x ${item.price} = $
                        {(item.quantity * item.price).toFixed(2)}
                      </Grid>
                    </Grid>
                  </ListItem>
                ))}
              </List>
            )}
          </Paper>
        </Grid>

        <Grid item md={4}>
          <Card sx={{ p: 3, borderRadius: 2, backgroundColor: '#f4f4f4' }}>
            <List>
              <ListItem>
                <Typography variant='h4'>Order Summary</Typography>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item>Items</Grid>
                  <Grid item>${cart.itemsPrice}</Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item>Shipping</Grid>
                  <Grid item>${cart.shippingPrice}</Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item>Tax</Grid>
                  <Grid item>${cart.taxPrice}</Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item>Total</Grid>
                  <Grid item>${cart.totalPrice}</Grid>
                </Grid>
              </ListItem>
              {/*  */}
              <ListItem>
                {error && <Message variant='danger'>{error}</Message>}
              </ListItem>
              {/*  */}
              <ListItem>
                <Button
                  type='button'
                  fullWidth
                  variant='contained'
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default PlaceOrderPage;

// import React, { useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import Message from '../../components/Message/Message';
// import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps';
// import { createOrder } from '../../_actions/orderActions';

// const PlaceOrderPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const cart = useSelector((state) => state.cart);

//   //   Calculate prices
//   const addDecimals = (num) => {
//     return isNaN(num)
//       ? '0.00'
//       : (Math.round(parseFloat(num) * 100) / 100).toFixed(2);
//   };

//   cart.itemsPrice = addDecimals(
//     cart.cartItems.reduce(
//       (acc, item) => acc + parseFloat(item.price) * parseFloat(item.quantity),
//       0
//     )
//   );
//   cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100);
//   cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
//   cart.totalPrice = (
//     Number(cart.itemsPrice) +
//     Number(cart.shippingPrice) +
//     Number(cart.taxPrice)
//   ).toFixed(2);

//   const orderCreate = useSelector((state) => state.orderCreate);
//   const { order, success, error } = orderCreate;

//   useEffect(() => {
//     if (success) {
//       navigate(`/order/${order._id}`);
//     }
//     // eslint-disable-next-line
//   }, [navigate, success]);

//   const placeOrderHandler = () => {
//     console.log('order');
//     dispatch(
//       createOrder({
//         orderItems: cart.cartItems,
//         shippingAddress: cart.shippingAddress,
//         paymentMethod: cart.paymentMethod,
//         itemsPrice: cart.itemsPrice,
//         shippingPrice: cart.shippingPrice,
//         taxPrice: cart.taxPrice,
//         totalPrice: cart.totalPrice,
//       })
//     );
//   };

//   return (
//     <>
//       <CheckoutSteps step1 step2 step3 step4 />
//       <Row>
//         <Col md={8}>
//           <ListGroup variant='flush'>
//             <ListGroup.Item>
//               <h2>Shipping</h2>
//               <p>
//                 <strong>Address:</strong>
//                 {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
//                 {cart.shippingAddress.postalCode},{' '}
//                 {cart.shippingAddress.country}
//               </p>
//             </ListGroup.Item>

//             <ListGroup.Item>
//               <h2>Payment Method</h2>
//               <strong>Method: </strong>
//               {cart.paymentMethod}
//             </ListGroup.Item>

//             <ListGroup.Item>
//               <h2>Order Items</h2>
//               {cart.cartItems.length === 0 ? (
//                 <Message>Your cart is empty</Message>
//               ) : (
//                 <ListGroup variant='flush'>
//                   {cart.cartItems.map((item, index) => (
//                     <ListGroup.Item key={index}>
//                       <Row>
//                         <Col md={1}>
//                           <Image
//                             src={item.image}
//                             alt={item.name}
//                             fluid
//                             rounded
//                           />
//                         </Col>
//                         <Col>
//                           <Link to={`/product/${item.product}`}>
//                             {item.name}
//                           </Link>
//                         </Col>
//                         <Col md={4}>
//                           {item.quantity} x ${item.price} = $
//                           {(item.quantity * item.price).toFixed(2)}
//                         </Col>
//                       </Row>
//                     </ListGroup.Item>
//                   ))}
//                 </ListGroup>
//               )}
//             </ListGroup.Item>
//           </ListGroup>
//         </Col>
//         <Col md={4}>
//           <Card>
//             <ListGroup variant='flush'>
//               <ListGroup.Item>
//                 <h2>Order Summary</h2>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <Row>
//                   <Col>Items</Col>
//                   <Col>${cart.itemsPrice}</Col>
//                 </Row>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <Row>
//                   <Col>Shipping</Col>
//                   <Col>${cart.shippingPrice}</Col>
//                 </Row>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <Row>
//                   <Col>Tax</Col>
//                   <Col>${cart.taxPrice}</Col>
//                 </Row>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <Row>
//                   <Col>Total</Col>
//                   <Col>${cart.totalPrice}</Col>
//                 </Row>
//               </ListGroup.Item>
//               {/*  */}
//               <ListGroup.Item>
//                 {error && <Message variant='danger'>{error}</Message>}
//               </ListGroup.Item>
//               {/*  */}
//               <ListGroup.Item>
//                 <Button
//                   type='button'
//                   className='btn-block'
//                   disabled={cart.cartItems === 0}
//                   onClick={placeOrderHandler}
//                 >
//                   Place Order
//                 </Button>
//               </ListGroup.Item>
//             </ListGroup>
//           </Card>
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default PlaceOrderPage;
