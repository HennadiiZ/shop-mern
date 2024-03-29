import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Button, Typography, TextField, Grid, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';
import FormContainer from '../../components/FormContainer/FormContainer';
import { register } from '../../_actions/userActions';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(register(name, email, password));
    }
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
        <Typography variant='h4'>Register</Typography>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}

        {loading && <Loader />}

        <form onSubmit={submitHandler}>
          <TextField
            label='Name'
            variant='outlined'
            fullWidth
            margin='normal'
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
            Register
          </Button>
        </form>

        <Grid container justifyContent='center' className='py-3'>
          <Typography>
            Have an Account?{' '}
            <RouterLink
              to={redirect ? `/login?redirect=${redirect}` : '/login'}
            >
              Login
            </RouterLink>
          </Typography>
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default RegisterPage;
