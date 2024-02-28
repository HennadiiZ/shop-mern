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
          // spacing={1}
          // md={8}
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
              value={product.rating}
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
                  <strong>${product.price * quantity}</strong>
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
                  // variant='outlined'
                  // color='primary'
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

//orig
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { Row, Col, Image, ListGroup, Button, Form } from 'react-bootstrap';
// import Rating from '../../components/Rating/Rating';
// import { getProductDetails } from '../../_actions/productActions';
// import Loader from '../../components/Loader/Loader';
// import Message from '../../components/Message/Message';

// const ProductPage = ({ history, match }) => {
//   const [quantity, setQuantity] = useState(1);
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(getProductDetails(id));
//   }, [dispatch, id]);

//   const productDetails = useSelector((state) => state.productDetails);
//   const { loading, error, product } = productDetails;

//   const addToCartHandler = () => {
//     navigate(`/cart/${id}?qty=${quantity}`);
//   };

//   return (
//     <>
//       <Link className='btn btn-light my-3' to='/'>
//         Go Back
//       </Link>
//       {!loading ? (
//         <Loader />
//       ) : error ? (
//         <h2>{<Message variant='danger'>{error}</Message>}</h2>
//       ) : (
//         <Row>
//           <Col md={6}>
//             <Image src={product.image} alt={product.name} fluid />
//           </Col>
//           <Col md={6}>
//             <ListGroup variant='flush'>
//               <ListGroup.Item>
//                 <h3>{product.name}</h3>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <Rating
//                   value={product.rating}
//                   text={`${product.numReviews} reviews`}
//                 />
//               </ListGroup.Item>
//               <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
//               <ListGroup.Item>
//                 Description: {product.description}
//               </ListGroup.Item>
//             </ListGroup>
//           </Col>
//           <Col md={12} className='my-3'>
//             <ListGroup>
//               <ListGroup.Item>
//                 <Row>
//                   <Col>Price:</Col>
//                   <Col>
//                     <strong>${product.price}</strong>
//                   </Col>
//                 </Row>
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <Row>
//                   <Col>Status:</Col>
//                   <Col>
//                     {product.countInStock > 0 ? 'In Stock' : 'Sold Out'}
//                   </Col>
//                 </Row>
//               </ListGroup.Item>
//               {/*  */}
//               {product.countInStock > 0 && (
//                 <ListGroup.Item>
//                   <Row>
//                     <Col>Quantity</Col>
//                     <Col>
//                       <Form.Control
//                         as='select'
//                         value={quantity}
//                         onChange={(e) => setQuantity(e.target.value)}
//                       >
//                         {[...Array(product.countInStock).keys()].map((i) => (
//                           <option key={i + 1} value={i + 1}>
//                             {i + 1}
//                           </option>
//                         ))}
//                       </Form.Control>
//                     </Col>
//                   </Row>
//                 </ListGroup.Item>
//               )}
//               {/*  */}
//               <ListGroup.Item className='text-center'>
//                 <Button
//                   onClick={addToCartHandler}
//                   className='btn-block w-100'
//                   type='button'
//                   disabled={product.countInStock === 0}
//                 >
//                   Add To Cart
//                 </Button>
//               </ListGroup.Item>
//             </ListGroup>
//           </Col>
//         </Row>
//       )}
//     </>
//   );
// };

// export default ProductPage;
