import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  Avatar,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';
import { getOrderDetails, payOrder } from '../../_actions/orderActions';
import { ORDER_PAY_RESET } from '../../constants/orderConstants';
import { clearCart } from '../../_actions/cartActions';

const OrderPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [sdkReady, setSdkReady] = useState(false);

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  if (!loading) {
    // Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      )
    );
  }

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };

      document.body.append(script);
    };

    if (!order || successPay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(id));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, id, successPay, order]);

  const successPaymentHandler = (paymentResult) => {
    console.log('paymentResult', paymentResult);

    dispatch(payOrder(id, paymentResult));

    if (paymentResult.status === 'COMPLETED') {
      navigate('/profile');
      dispatch(clearCart());
      // localStorage.removeItem('cartItems');
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant='h6'>Order {order?.['_id']}</Typography>
      </Grid>

      <Grid item md={8}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
            <Card sx={{ mt: 2, backgroundColor: 'rgba(244, 244, 244, 0.9)' }}>
              <CardContent>
                <Typography variant='h4'>Shipping</Typography>
                <Typography>
                  <strong>Name: </strong> {order?.user?.name}
                </Typography>
                <Typography>
                  <strong>Email: </strong>
                  <a href={`mailto:${order?.user?.email}`}>
                    {order?.user?.email}
                  </a>
                </Typography>
                <Typography>
                  <strong>Address:</strong>
                  {order?.shippingAddress?.address},{' '}
                  {order?.shippingAddress?.city}{' '}
                  {order?.shippingAddress?.postalCode},{' '}
                  {order?.shippingAddress?.country}
                </Typography>
                {/* Conditional rendering for isDelivered */}
                {/* {order?.isDelivered ? (
                  <Message variant='success'>
                    Delivered on {order?.deliveredAt}
                  </Message>
                ) : (
                  <Message variant='danger'>Not Delivered</Message>
                )} */}
              </CardContent>
            </Card>

            <Card sx={{ mt: 2, backgroundColor: 'rgba(244, 244, 244, 0.9)' }}>
              <CardContent>
                <Typography variant='h4'>Payment Method</Typography>
                <Typography>
                  <strong>Method: </strong>
                  {order?.paymentMethod}
                </Typography>
                {/* Conditional rendering for isPaid */}
                {/* {order?.isPaid ? (
                  <Message variant='success'>Paid on {order?.paidAt}</Message>
                ) : (
                  <Message variant='danger'>Not Paid</Message>
                )} */}
              </CardContent>
            </Card>

            <Card sx={{ mt: 2, backgroundColor: 'rgba(244, 244, 244, 0.9)' }}>
              <CardContent>
                <Typography variant='h4'>Order Items</Typography>
                {order?.orderItems?.length === 0 ? (
                  <Message>Order is empty</Message>
                ) : (
                  <List>
                    {order?.orderItems?.map((item, index) => (
                      <ListItem key={index}>
                        <Grid container alignItems='center'>
                          <Avatar
                            src={item?.image}
                            alt={item?.name}
                            variant='rounded'
                            sx={{ marginRight: 2 }}
                          />
                          <Link to={`/product/${item?.product}`}>
                            {item?.name}
                          </Link>
                          <Typography ml={2}>
                            {item?.quantity} x ${item?.price} = $
                            {(item?.quantity * item?.price).toFixed(2)}
                          </Typography>
                        </Grid>
                      </ListItem>
                    ))}
                  </List>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </Grid>

      <Grid item md={4}>
        <Card sx={{ mt: 2, backgroundColor: 'rgba(244, 244, 244, 0.9)' }}>
          <CardContent>
            <Typography variant='h4'>Order Summary</Typography>
            <Typography>
              <strong>Items: </strong>${order?.itemsPrice}
            </Typography>
            <Typography>
              <strong>Shipping: </strong>${order?.shippingPrice}
            </Typography>
            <Typography>
              <strong>Tax: </strong>${order?.taxPrice}
            </Typography>
            <Typography sx={{ mb: 2 }}>
              <strong>Total: </strong>${order?.totalPrice}
            </Typography>
            <PayPalButton
              amount={order?.totalPrice}
              onSuccess={successPaymentHandler}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default OrderPage;
