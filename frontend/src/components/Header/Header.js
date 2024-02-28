import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import { logout } from '../../_actions/userActions';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    navigate('/profile');
  };

  const logoutHandler = () => {
    dispatch(logout());
    handleClose();
  };

  return (
    <header>
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
              <NavLink
                to='/'
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: 'inherit',
                }}
              >
                Shop
              </NavLink>
            </Typography>
            {userInfo ? (
              <div>
                <NavLink
                  to='/cart'
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  <Button color='inherit'>Cart</Button>
                </NavLink>
                <Button
                  size='medium'
                  edge='end'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleMenu}
                  color='inherit'
                >
                  {userInfo.name}
                </Button>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <NavLink
                to='/login'
                style={{ color: 'white', textDecoration: 'none' }}
              >
                <Button color='inherit' size='large'>
                  Sign In
                </Button>
              </NavLink>
            )}
          </Toolbar>
        </div>
      </AppBar>
    </header>
  );
};

export default Header;

//-----
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { LinkContainer } from 'react-router-bootstrap';
// import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import { logout } from '../../_actions/userActions';

// const Header = () => {
//   const dispatch = useDispatch();
//   const userLogin = useSelector((state) => state.userLogin);
//   const { loading, error, userInfo } = userLogin;

//   // console.log('userInfo', userInfo);

//   const logoutHandler = () => {
//     dispatch(logout());
//   };

//   return (
//     <header>
//       <Navbar bg='dark' variant='dark' expand='lg'>
//         <Container>
//           <LinkContainer to='/'>
//             <Navbar.Brand>Shop</Navbar.Brand>
//           </LinkContainer>
//           <Navbar.Toggle aria-controls='basic-navbar-nav' />
//           <Navbar.Collapse
//             id='basic-navbar-nav'
//             className='justify-content-end'
//           >
//             <Nav className='ml-auto'>
//               <LinkContainer to='/cart'>
//                 <Nav.Link>
//                   <i className='fas fa-shopping-cart'></i>Cart
//                 </Nav.Link>
//               </LinkContainer>
//               {userInfo ? (
//                 <NavDropdown title={userInfo.name} id='username'>
//                   <LinkContainer to='/profile'>
//                     <NavDropdown.Item>Profile</NavDropdown.Item>
//                   </LinkContainer>
//                   <NavDropdown.Item onClick={logoutHandler}>
//                     Logout
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               ) : (
//                 <LinkContainer to='/login'>
//                   <Nav.Link>
//                     <i className='fas fa-user'></i> Sign In
//                   </Nav.Link>
//                 </LinkContainer>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default Header;
