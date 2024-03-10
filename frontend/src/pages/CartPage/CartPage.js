import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link, useLocation } from 'react-router-dom';
import { Grid, Typography, Button, Select, MenuItem } from '@mui/material';
import { addToCart, removeFromCart } from '../../_actions/cartActions';
import Message from '../../components/Message/Message';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const location = useLocation();
  const queryString = location.search;
  const searchParams = new URLSearchParams(location.search);

  const quantity = queryString ? +searchParams.get('qty') : 1;

  const userInfo = useSelector((state) => state.userLogin.userInfo);
  const redirectPath = userInfo ? '/shipping' : '/login?redirect=shipping';

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, quantity));
    }
  }, [dispatch, id, quantity]);

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const checkoutHandler = () => {
    navigate(redirectPath);
  };

  return (
    <Grid container spacing={3}>
      <Grid item md={8}>
        <Typography variant='h4' sx={{ mb: 3 }}>
          Shopping Cart
        </Typography>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <Grid
            // container
            spacing={2}
            sx={{
              backgroundColor: 'rgba(244, 244, 244, 0.9)',
              padding: 3,
              ml: 0,
              marginTop: 1,
              borderRadius: 2,
              boxShadow:
                '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)',
            }}
          >
            {cartItems.map((item) => (
              <Grid item xs={12} key={item.product}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '100%' }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant='h6'>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Typography>
                    <Typography variant='body1'>
                      Quantity: {item.quantity}
                    </Typography>
                    <Typography variant='body1'>$ {item.price}</Typography>
                    <Select
                      value={item.quantity}
                      onChange={(e) =>
                        dispatch(addToCart(item.product, +e.target.value))
                      }
                      fullWidth
                    >
                      {[...Array(item.countInStock).keys()].map((i) => (
                        <MenuItem key={i + 1} value={i + 1}>
                          {i + 1}
                        </MenuItem>
                      ))}
                    </Select>
                    <Button
                      aria-label='delete'
                      variant='outlined'
                      color='error'
                      onClick={() => removeFromCartHandler(item.product)}
                      sx={{
                        marginTop: 1,
                      }}
                    >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
      <Grid item md={4}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: 'rgba(244, 244, 244, 0.9)',
              padding: 3,
              marginTop: 4,
              marginLeft: 2,
              borderRadius: 2,
              boxShadow:
                '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)',
            }}
          >
            <Typography variant='h4'>
              Subtotal&nbsp;
              {cartItems.reduce((acc, item) => +acc + +item.quantity, 0)} items
            </Typography>
            <Typography variant='body1'>
              $
              {cartItems
                .reduce((acc, item) => +acc + +item.quantity * +item.price, 0)
                .toFixed(2)}
            </Typography>
            <Button
              type='button'
              fullWidth
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
              variant='contained'
              sx={{
                marginTop: 2,
              }}
            >
              Proceed to Checkout
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CartPage;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, useParams, Link, useLocation } from 'react-router-dom';
// import { Grid, Typography, Button, Select, MenuItem } from '@mui/material';
// import { addToCart, removeFromCart } from '../../_actions/cartActions';
// import Message from '../../components/Message/Message';

// const CartPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const location = useLocation();
//   const queryString = location.search;
//   const searchParams = new URLSearchParams(location.search);

//   const quantity = queryString ? +searchParams.get('qty') : 1;

//   const userInfo = useSelector((state) => state.userLogin.userInfo);
//   const redirectPath = userInfo ? '/shipping' : '/login?redirect=shipping';

//   const cart = useSelector((state) => state.cart);
//   const { cartItems } = cart;

//   useEffect(() => {
//     if (id) {
//       dispatch(addToCart(id, quantity));
//     }
//   }, [dispatch, id, quantity]);

//   const removeFromCartHandler = (productId) => {
//     dispatch(removeFromCart(productId));
//   };

//   const checkoutHandler = () => {
//     navigate(redirectPath);
//   };

//   return (
//     <Grid container spacing={3}>
//       <Grid item md={8}>
//         <Typography variant='h4' sx={{ mb: 3 }}>
//           Shopping Cart
//         </Typography>
//         {cartItems.length === 0 ? (
//           <Message>
//             Your cart is empty <Link to='/'>Go Back</Link>
//           </Message>
//         ) : (
//           <Grid
//             container
//             spacing={2}
//             sx={{
//               backgroundColor: 'rgba(244, 244, 244, 0.9)',
//               padding: 3,
//               ml: 0,
//               marginTop: 1,
//               borderRadius: 2,
//               boxShadow:
//                 '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)',
//             }}
//           >
//             {cartItems.map((item) => (
//               <Grid item xs={12} key={item.product}>
//                 <Grid container spacing={2}>
//                   <Grid item xs={4}>
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       style={{ width: '100%' }}
//                     />
//                   </Grid>
//                   <Grid item xs={8}>
//                     <Typography variant='h6'>
//                       <Link to={`/product/${item.product}`}>{item.name}</Link>
//                     </Typography>
//                     <Typography variant='body1'>
//                       Quantity: {item.quantity}
//                     </Typography>
//                     <Typography variant='body1'>$ {item.price}</Typography>
//                     <Select
//                       value={item.quantity}
//                       onChange={(e) =>
//                         dispatch(addToCart(item.product, +e.target.value))
//                       }
//                       fullWidth
//                     >
//                       {[...Array(item.countInStock).keys()].map((i) => (
//                         <MenuItem key={i + 1} value={i + 1}>
//                           {i + 1}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                     <Button
//                       aria-label='delete'
//                       variant='outlined'
//                       color='error'
//                       onClick={() => removeFromCartHandler(item.product)}
//                       sx={{
//                         marginTop: 1,
//                       }}
//                     >
//                       Delete
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             ))}
//           </Grid>
//         )}
//       </Grid>
//       <Grid item md={4}>
//         <Grid container spacing={2}>
//           <Grid
//             item
//             xs={12}
//             sx={{
//               backgroundColor: 'rgba(244, 244, 244, 0.9)',
//               padding: 3,
//               marginTop: 4,
//               marginLeft: 2,
//               borderRadius: 2,
//               boxShadow:
//                 '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)',
//             }}
//           >
//             <Typography variant='h4'>
//               Subtotal&nbsp;
//               {cartItems.reduce((acc, item) => +acc + +item.quantity, 0)} items
//             </Typography>
//             <Typography variant='body1'>
//               $
//               {cartItems
//                 .reduce((acc, item) => +acc + +item.quantity * +item.price, 0)
//                 .toFixed(2)}
//             </Typography>
//             <Button
//               type='button'
//               fullWidth
//               disabled={cartItems.length === 0}
//               onClick={checkoutHandler}
//               variant='contained'
//               sx={{
//                 marginTop: 2,
//               }}
//             >
//               Proceed to Checkout
//             </Button>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default CartPage;
