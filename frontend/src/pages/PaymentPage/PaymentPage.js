import React, { useState } from 'react';
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Typography,
  Grid,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../../components/FormContainer/FormContainer';
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps';
import { savePaymentMethod } from '../../_actions/cartActions';
import { useNavigate } from 'react-router';

const PaymentPage = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const navigate = useNavigate();

  if (!shippingAddress) {
    navigate('/shipping');
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/placeorder');
  };

  return (
    <FormContainer>
      <Grid
        sx={{
          borderRadius: 2,
          marginTop: 3,
          padding: 3,
          // marginLeft: -2,
          paddingBottom: 0,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CheckoutSteps step1 step2 step3 />
      </Grid>

      <Grid
        sx={{
          backgroundColor: 'rgba(244, 244, 244, 0.9)',
          padding: 3,
          borderRadius: 2,
          marginTop: 3,
          // marginLeft: -2,
          boxShadow:
            '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)',
        }}
      >
        <Typography variant='h4'>Payment Method</Typography>
        <form onSubmit={submitHandler}>
          <RadioGroup
            aria-label='paymentMethod'
            name='paymentMethod'
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <FormControlLabel
              value='PayPal'
              control={<Radio />}
              label='PayPal or Credit Card'
            />
            <FormControlLabel
              value='Stripe'
              control={<Radio />}
              label='Stripe'
              disabled
            />
          </RadioGroup>

          <Button
            type='submit'
            variant='contained'
            color='primary'
            sx={{ marginTop: '15px' }}
          >
            Continue
          </Button>
        </form>
      </Grid>
    </FormContainer>
  );
};

export default PaymentPage;
