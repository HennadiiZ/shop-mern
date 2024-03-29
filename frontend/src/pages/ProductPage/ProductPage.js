import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography, Button, Select, MenuItem } from '@mui/material';
import Rating from '../../components/Rating/Rating';
import { getProductDetails } from '../../_actions/productActions';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${quantity}`);
  };

  const handleQuantityChange = (e) => {
    const selectedQuantity = e.target.value;
    setQuantity(selectedQuantity);
  };

  return (
    <>
      <Button component={RouterLink} to='/' variant='contained' color='primary'>
        Go Back
      </Button>
      {!loading ? (
        <Loader />
      ) : error ? (
        <Typography variant='h2' color='error'>
          <Message variant='danger'>{error}</Message>
        </Typography>
      ) : (
        <Grid
          container
          sx={{
            backgroundColor: 'rgba(244, 244, 244, 0.9)',
            padding: 3,
            marginTop: 1,
            borderRadius: 2,
            boxShadow:
              '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)',
          }}
        >
          <Grid item md={3}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item md={5} style={{ marginLeft: 15 }}>
            <Typography variant='h4'>{product.name}</Typography>
            <Rating
              value={product.rating || 0}
              text={`${product.numReviews} reviews`}
            />
            <Typography variant='body1'>
              Description: {product.description}
            </Typography>
          </Grid>
          <Grid item md={8} sx={{ my: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Typography variant='h6'>Price:</Typography>
                <Typography variant='body1'>
                  {/* <strong>${product.price * quantity}</strong> */}
                  <strong>${(product.price * quantity).toFixed(2)}</strong>
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant='h6'>Status:</Typography>
                <Typography variant='body1'>
                  {product.countInStock > 0 ? 'In Stock' : 'Sold Out'}
                </Typography>
              </Grid>
              {product.countInStock > 0 && (
                <Grid item xs={12} md={4}>
                  <Typography variant='h6'>Quantity</Typography>
                  <Select
                    value={quantity}
                    onChange={handleQuantityChange}
                    sx={{ width: '100%', borderRadius: 4 }}
                  >
                    {[...Array(product.countInStock).keys()].map((i) => (
                      <MenuItem key={i + 1} value={i + 1}>
                        {i + 1}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              )}
              <Grid item xs={12} className='text-center'>
                <Button
                  onClick={addToCartHandler}
                  variant='contained'
                  color='primary'
                  disabled={product.countInStock === 0}
                  sx={{ width: '100%' }}
                >
                  Add To Cart
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ProductPage;
