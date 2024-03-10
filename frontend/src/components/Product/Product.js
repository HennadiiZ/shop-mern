// // Product.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '../Rating/Rating';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Card
      className='my-3 rounded'
      sx={{
        maxWidth: 345,
        padding: 1,
        backgroundColor: 'rgba(244, 244, 244, 0.9)',
        borderRadius: 2,
      }}
    >
      <Link to={`/product/${product._id}`}>
        <CardMedia
          component='img'
          alt={product.name}
          height='240'
          image={product.image}
        />
      </Link>
      <CardContent>
        <Link to={`/product/${product._id}`}>
          <Typography variant='h6' component='div'>
            <strong>{product.name}</strong>
          </Typography>
        </Link>
        <Typography variant='body2' color='text.secondary' component='div'>
          <Rating
            value={product.rating || 0}
            text={`${product.numReviews} reviews`}
          />
        </Typography>
        <Typography variant='h6' color='text.primary'>
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
