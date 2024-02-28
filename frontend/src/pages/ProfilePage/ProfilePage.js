import {
  Button,
  Typography,
  TextField,
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

import React, { useState, useEffect } from 'react';
// import { Table, Form, Button, Row, Col } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';
import { getUserDetails, updateUserProfile } from '../../_actions/userActions';
import { listMyOrders } from '../../_actions/orderActions';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    } else {
      dispatch(getUserDetails('profile'));
      dispatch(listMyOrders());
    }
  }, [userInfo, navigate, dispatch]);

  useEffect(() => {
    if (user && user.name) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          mt: 5,
          padding: 3,
          backgroundColor: 'rgba(244, 244, 244, 0.9)',
          borderRadius: 2,
        }}
      >
        <Grid item xs={12} md={3}>
          <Typography variant='h6'>User Profile</Typography>
          {message && <Message variant='danger'>{message}</Message>}
          {error && <Message variant='danger'>{error}</Message>}
          {success && <Message variant='success'>Profile Updated</Message>}
          {loading && <Loader />}

          <form onSubmit={submitHandler}>
            <TextField
              label='Name'
              variant='outlined'
              fullWidth
              margin='normal'
              type='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              label='Email Address'
              variant='outlined'
              fullWidth
              margin='normal'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label='Password'
              variant='outlined'
              fullWidth
              margin='normal'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <TextField
              label='Confirm Password'
              variant='outlined'
              fullWidth
              margin='normal'
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button
              type='submit'
              variant='contained'
              color='primary'
              fullWidth
              sx={{ mt: 3 }}
            >
              Update
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography variant='h6'>Orders</Typography>
          {loadingOrders ? (
            <Loader />
          ) : errorOrders ? (
            <Message variant='danger'>{errorOrders}</Message>
          ) : (
            <TableContainer>
              <Table striped bordered hover responsive>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>DATE</TableCell>
                    <TableCell>TOTAL</TableCell>
                    <TableCell>PAID</TableCell>
                    <TableCell>DELIVERED</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order._id}>
                      <TableCell>{order._id}</TableCell>
                      <TableCell>{order.createdAt.substring(0, 10)}</TableCell>
                      <TableCell>{order.totalPrice}</TableCell>
                      <TableCell>
                        {order.isPaid ? (
                          order.paidAt.substring(0, 10)
                        ) : (
                          <i
                            className='fas fa-times'
                            style={{ color: 'red' }}
                          ></i>
                        )}
                      </TableCell>
                      <TableCell>
                        {order.isDelivered ? (
                          order.deliveredAt.substring(0, 10)
                        ) : (
                          <i
                            className='fas fa-times'
                            style={{ color: 'red' }}
                          ></i>
                        )}
                      </TableCell>
                      <TableCell>
                        <Link to={`/order/${order._id}`}>
                          <Button className='btn-sm' variant='light'>
                            Details
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ProfilePage;

// orig
// import React, { useState, useEffect } from 'react';
// import { Table, Form, Button, Row, Col } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import Message from '../../components/Message/Message';
// import Loader from '../../components/Loader/Loader';
// import { getUserDetails, updateUserProfile } from '../../_actions/userActions';
// import { listMyOrders } from '../../_actions/orderActions';

// const ProfilePage = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [message, setMessage] = useState(null);

//   const navigate = useNavigate();

//   const dispatch = useDispatch();

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   const userDetails = useSelector((state) => state.userDetails);
//   const { loading, error, user } = userDetails;

//   const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
//   const { success } = userUpdateProfile;

//   const orderListMy = useSelector((state) => state.orderListMy);
//   const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

//   useEffect(() => {
//     if (!userInfo) {
//       navigate('/login');
//     } else {
//       dispatch(getUserDetails('profile'));
//       dispatch(listMyOrders());
//     }
//   }, [userInfo, navigate, dispatch]);

//   useEffect(() => {
//     if (user && user.name) {
//       setName(user.name);
//       setEmail(user.email);
//     }
//   }, [user]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setMessage('Passwords do not match');
//     } else {
//       dispatch(updateUserProfile({ id: user._id, name, email, password }));
//     }
//   };

//   return (
//     <Row>
//       <Col md={3}>
//         <h2>User Profile</h2>
//         {message && <Message variant='danger'>{message}</Message>}
//         {error && <Message variant='danger'>{error}</Message>}
//         {success && <Message variant='success'>Profile Updated</Message>}
//         {loading && <Loader />}

//         <Form.Group controlId='name'>
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type='name'
//             placeholder='Enter name'
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           ></Form.Control>
//         </Form.Group>

//         <Form onSubmit={submitHandler}>
//           <Form.Group controlId='email'>
//             <Form.Label>Email Address</Form.Label>
//             <Form.Control
//               type='email'
//               placeholder='Enter email'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             ></Form.Control>
//           </Form.Group>

//           <Form.Group controlId='password'>
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type='password'
//               placeholder='Enter password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             ></Form.Control>
//           </Form.Group>

//           <Form.Group controlId='confirmPassword'>
//             <Form.Label>Confirm Password</Form.Label>
//             <Form.Control
//               type='password'
//               placeholder='Confirm password'
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             ></Form.Control>
//           </Form.Group>

//           <Button type='submit' variant='primary' className='mt-3'>
//             Update
//           </Button>
//         </Form>
//       </Col>
//       <Col md={9}>
//         <h2>Orders</h2>
//         {loadingOrders ? (
//           <Loader />
//         ) : errorOrders ? (
//           <Message variant='danger'>{errorOrders}</Message>
//         ) : (
//           <Table striped bordered hover responsive className='table-sm'>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>DATE</th>
//                 <th>TOTAL</th>
//                 <th>PAID</th>
//                 <th>DELIVERED</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order) => (
//                 <tr key={order._id}>
//                   <td>{order._id}</td>
//                   <td>{order.createdAt.substring(0, 10)}</td>
//                   <td>{order.totalPrice}</td>
//                   <td>
//                     {order.isPaid ? (
//                       order.paidAt.substring(0, 10)
//                     ) : (
//                       <i className='fas fa-times' style={{ color: 'red' }}></i>
//                     )}
//                   </td>
//                   <td>
//                     {order.isDelivered ? (
//                       order.deliveredAt.substring(0, 10)
//                     ) : (
//                       <i className='fas fa-times' style={{ color: 'red' }}></i>
//                     )}
//                   </td>
//                   <td>
//                     <LinkContainer to={`/order/${order._id}`}>
//                       <Button className='btn-sm' variant='light'>
//                         Details
//                       </Button>
//                     </LinkContainer>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         )}
//       </Col>
//     </Row>
//   );
// };

// export default ProfilePage;
