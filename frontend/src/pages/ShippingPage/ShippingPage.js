import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../../_actions/cartActions';
import FormContainer from '../../components/FormContainer/FormContainer';
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps';

const ShippingPage = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));

    navigate('/payment');
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
        <CheckoutSteps step1 step2 />
      </Grid>
      <Grid
        container
        component='form'
        onSubmit={submitHandler}
        spacing={2}
        sx={{
          backgroundColor: 'rgba(244, 244, 244, 0.9)',
          padding: 3,
          paddingLeft: 0,
          borderRadius: 2,
          marginTop: 3,
          boxShadow:
            '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)',
        }}
      >
        <Typography
          variant='h4'
          sx={{
            paddingLeft: 2,
            marginBottom: 3,
          }}
        >
          Shipping
        </Typography>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Address'
            variant='outlined'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='City'
            variant='outlined'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Postal Code'
            variant='outlined'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Country'
            variant='outlined'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            style={{ marginTop: '15px' }}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default ShippingPage;
