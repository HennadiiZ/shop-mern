import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Button, Typography, TextField, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';
import FormContainer from '../../components/FormContainer/FormContainer';
import { login } from '../../_actions/userActions';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <Grid
        sx={{
          mt: 5,
          padding: 3,
          backgroundColor: 'rgba(244, 244, 244, 0.9)',
          borderRadius: 2,
        }}
      >
        <Typography variant='h4'>Sign In</Typography>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <form onSubmit={submitHandler}>
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

          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            sx={{ mt: 3 }}
          >
            Sign In
          </Button>
        </form>

        <Grid container justifyContent='center' className='py-3'>
          <Typography>
            New Customer?{' '}
            <RouterLink
              to={redirect ? `/register?redirect=${redirect}` : '/register'}
            >
              Register
            </RouterLink>
          </Typography>
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default LoginPage;
