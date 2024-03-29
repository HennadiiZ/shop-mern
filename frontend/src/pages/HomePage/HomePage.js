import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Grid } from '@mui/material';
import Product from '../../components/Product/Product';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';
import { listProducts } from '../../_actions/productActions';

const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Box
      sx={{
        padding: 3,
        backgroundColor: 'rgba(244, 244, 244, 0.3)',
        borderRadius: 2,
      }}
    >
      <Typography variant='h4' component='h1' mb={2}>
        CHOOSE YOUR VINYL
      </Typography>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default HomePage;
