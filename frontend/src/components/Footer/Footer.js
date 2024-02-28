import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position='static' color='primary'>
      <div className='container'>
        <Toolbar
          sx={{
            '@media (min-width: 600px)': {
              paddingLeft: '0',
              paddingRight: '0',
            },
          }}
        >
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link
              to='/california-privacy-notice'
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <Button color='inherit'>Copyright &copy; VINYL STORE</Button>
            </Link>
          </Typography>

          <Link
            to='/cookies-settings'
            style={{ color: 'white', textDecoration: 'none' }}
          >
            <Button color='inherit'>Cookies Settings</Button>
          </Link>
          <Link
            to='/cookie-policy'
            style={{ color: 'white', textDecoration: 'none' }}
          >
            <Button color='inherit'>Cookie Policy</Button>
          </Link>
          <Link
            to='/terms-of-service'
            style={{ color: 'white', textDecoration: 'none' }}
          >
            <Button color='inherit'>Terms of Service</Button>
          </Link>
          <Link
            to='/privacy-policy'
            style={{ color: 'white', textDecoration: 'none' }}
          >
            <Button color='inherit'>Privacy Policy</Button>
          </Link>
          <Link
            to='/accessibility-statement'
            style={{ color: 'white', textDecoration: 'none' }}
          >
            <Button color='inherit'>Accessibility Statement</Button>
          </Link>
          {/*  */}
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Footer;
