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
            {/* You can customize the text and links as needed */}
            <Link
              to='/california-privacy-notice'
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <Button color='inherit'>Copyright &copy; Shop</Button>
            </Link>
          </Typography>
          {/*  */}
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

// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

// const Footer = () => {
//   return (
//     <footer>
//       <Container>
//         <Row>
//           <Col className='text-center py-3'>
//             Copyright &copy; Shop
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   )
// }

// export default Footer
