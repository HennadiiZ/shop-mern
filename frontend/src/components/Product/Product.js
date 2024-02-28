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
      // sx={{ maxWidth: 345 }}
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
        <Typography variant='body2' color='text.secondary'>
          <Rating
            value={product.rating}
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

// orig
// import React from 'react';
// import { Card } from 'react-bootstrap';
// import Rating from '../Rating/Rating';
// import { Link } from 'react-router-dom';

// const Product = ({ product }) => {
//   return (
//     <Card className='my-3 p-3 rounded'>
//       <Link to={`/product/${product._id}`}>
//         <Card.Img src={product.image} variant='top' />
//       </Link>
//       <Card.Body>
//         <Link to={`/product/${product._id}`}>
//           <Card.Title as='div'>
//             <strong>{product.name}</strong>
//           </Card.Title>
//         </Link>
//         <Card.Text as='div'>
//           {/* my component */}
//           <Rating
//             value={product.rating}
//             text={`${product.numReviews} reviews`}
//           />
//           {/*  */}
//         </Card.Text>
//         <Card.Text as='h3'>${product.price}</Card.Text>
//       </Card.Body>
//     </Card>
//   );
// };

// export default Product;
