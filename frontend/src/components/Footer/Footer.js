import React from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, Button, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            padding: { xs: '0 10px', sm: '0 20px', md: '0 30px' },
          }}
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <div
              style={{
                backgroundColor: 'black',
                display: 'inline-block',
                padding: '0 10px',
                borderRadius: '3px',
              }}
              color='inherit'
            >
              Copyright &copy; VINYL STORE
            </div>
          </Typography>

          <div>
            <Link
              to='/cookies-settings'
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '10px',
              }}
            >
              <Button color='inherit'>Cookies Settings</Button>
            </Link>
            <Link
              to='/cookie-policy'
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '10px',
              }}
            >
              <Button color='inherit'>Cookie Policy</Button>
            </Link>
            <Link
              to='/terms-of-service'
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '10px',
              }}
            >
              <Button color='inherit'>Terms of Service</Button>
            </Link>
            <Link
              to='/privacy-policy'
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '10px',
              }}
            >
              <Button color='inherit'>Privacy Policy</Button>
            </Link>
            <Link
              to='/accessibility-statement'
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <Button color='inherit'>Accessibility Statement</Button>
            </Link>
          </div>
        </Toolbar>
      </div>
    </footer>
  );
};

export default Footer;
