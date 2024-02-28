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
          backgroundColor: '#f4f4f4',
          borderRadius: 2,
          marginTop: 3,
          padding: 3,
          marginLeft: -2,
          paddingBottom: 0,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CheckoutSteps step1 step2 />
      </Grid>
      {/* <CheckoutSteps step1 step2 /> */}
      <Grid
        container
        component='form'
        onSubmit={submitHandler}
        spacing={2}
        sx={{
          backgroundColor: '#f4f4f4',
          padding: 3,
          paddingLeft: 0,
          borderRadius: 2,
          marginTop: 3,
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

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Form, Button } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { saveShippingAddress } from '../../_actions/cartActions';
// import FormContainer from '../../components/FormContainer/FormContainer';
// import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps';

// const ShippingPage = () => {
//   const cart = useSelector((state) => state.cart);
//   const { shippingAddress } = cart;

//   const [address, setAddress] = useState(shippingAddress.address);
//   const [city, setCity] = useState(shippingAddress.city);
//   const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
//   const [country, setCountry] = useState(shippingAddress.country);
//   const navigate = useNavigate();

//   const dispatch = useDispatch();

//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(saveShippingAddress({ address, city, postalCode, country }));

//     navigate('/payment');
//   };

//   return (
//     <FormContainer>
//       <CheckoutSteps step1 step2 />
//       <h1>Shipping</h1>
//       <Form onSubmit={submitHandler}>
//         <Form.Group controlId='address'>
//           <Form.Label>Address</Form.Label>
//           <Form.Control
//             type='text'
//             placeholder='Enter address'
//             value={address}
//             required
//             onChange={(e) => setAddress(e.target.value)}
//           ></Form.Control>
//         </Form.Group>

//         <Form.Group controlId='city'>
//           <Form.Label>City</Form.Label>
//           <Form.Control
//             type='text'
//             placeholder='Enter city'
//             value={city}
//             required
//             onChange={(e) => setCity(e.target.value)}
//           ></Form.Control>
//         </Form.Group>

//         <Form.Group controlId='postalCode'>
//           <Form.Label>Postal Code</Form.Label>
//           <Form.Control
//             type='text'
//             placeholder='Enter postal code'
//             value={postalCode}
//             required
//             onChange={(e) => setPostalCode(e.target.value)}
//           ></Form.Control>
//         </Form.Group>

//         <Form.Group controlId='country'>
//           <Form.Label>Country</Form.Label>
//           <Form.Control
//             type='text'
//             placeholder='Enter country'
//             value={country}
//             required
//             onChange={(e) => setCountry(e.target.value)}
//           ></Form.Control>
//         </Form.Group>

//         <Button type='submit' variant='primary' style={{ marginTop: '15px' }}>
//           Continue
//         </Button>
//       </Form>
//     </FormContainer>
//   );
// };

// export default ShippingPage;
