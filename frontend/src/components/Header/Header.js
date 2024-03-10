import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

import { logout } from '../../_actions/userActions';
import VinylLogo from '../../images/vinyl.png';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setMobileMenuOpen(open);
  };

  const mobileMenu = (
    <Drawer anchor='right' open={mobileMenuOpen} onClose={toggleDrawer(false)}>
      <List>
        <ListItem
          button
          component={NavLink}
          to='/'
          onClick={toggleDrawer(false)}
        >
          <ListItemText primary='Home' />
        </ListItem>
        {userInfo ? (
          <>
            <ListItem
              button
              component={NavLink}
              to='/cart'
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary='Cart' />
            </ListItem>
            <ListItem button onClick={handleClose}>
              <ListItemText primary='Profile' />
            </ListItem>
            <ListItem button onClick={logoutHandler}>
              <ListItemText primary='Logout' />
            </ListItem>
          </>
        ) : (
          <ListItem
            button
            component={NavLink}
            to='/login'
            onClick={toggleDrawer(false)}
          >
            <ListItemText primary='Sign In' />
          </ListItem>
        )}
      </List>
    </Drawer>
  );

  return (
    <header>
      <AppBar position='static' color='primary'>
        <div className='container'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2, display: { sm: 'none' } }}
              onClick={toggleDrawer(true)}
            >
              {/* <MenuIcon /> */}=
            </IconButton>
            {mobileMenu}
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <NavLink
                to='/'
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: 'inherit',
                }}
              >
                <img
                  src={VinylLogo}
                  alt='Vinyl Store Logo'
                  style={{ marginRight: '10px', height: '30px' }}
                />
                VINYL STORE
              </NavLink>
            </Typography>
            <div sx={{ display: { xs: 'none', sm: 'block' } }}>
              {userInfo ? (
                <>
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
                </>
              ) : (
                <NavLink
                  to='/login'
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  <Button color='inherit'>Sign In</Button>
                </NavLink>
              )}
            </div>
          </Toolbar>
        </div>
      </AppBar>
    </header>
  );
};

export default Header;

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { NavLink, useNavigate } from 'react-router-dom';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Menu,
//   MenuItem,
// } from '@mui/material';
// import { logout } from '../../_actions/userActions';
// import VinylLogo from '../../images/vinyl.png';

// const Header = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//     navigate('/profile');
//   };

//   const logoutHandler = () => {
//     dispatch(logout());
//     handleClose();
//   };

//   return (
//     <header>
//       <AppBar position='static' color='primary'>
//         <div className='container'>
//           <Toolbar
//             sx={{
//               '@media (min-width: 600px)': {
//                 paddingLeft: '0',
//                 paddingRight: '0',
//               },
//             }}
//           >
//             <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
//               <NavLink
//                 to='/'
//                 style={{
//                   color: 'white',
//                   textDecoration: 'none',
//                   fontSize: 'inherit',
//                 }}
//               >
//                 <img
//                   src={VinylLogo}
//                   alt='Vinyl Store Logo'
//                   style={{ marginRight: '10px', height: '30px' }}
//                 />
//                 VINYL STORE
//               </NavLink>
//             </Typography>
//             {userInfo ? (
//               <div>
//                 <NavLink
//                   to='/cart'
//                   style={{ color: 'white', textDecoration: 'none' }}
//                 >
//                   <Button color='inherit'>Cart</Button>
//                 </NavLink>
//                 <Button
//                   size='medium'
//                   edge='end'
//                   aria-label='account of current user'
//                   aria-controls='menu-appbar'
//                   aria-haspopup='true'
//                   onClick={handleMenu}
//                   color='inherit'
//                 >
//                   {userInfo.name}
//                 </Button>
//                 <Menu
//                   id='menu-appbar'
//                   anchorEl={anchorEl}
//                   anchorOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                   }}
//                   keepMounted
//                   transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                   }}
//                   open={Boolean(anchorEl)}
//                   onClose={handleClose}
//                 >
//                   <MenuItem onClick={handleClose}>Profile</MenuItem>
//                   <MenuItem onClick={logoutHandler}>Logout</MenuItem>
//                 </Menu>
//               </div>
//             ) : (
//               <NavLink
//                 to='/login'
//                 style={{ color: 'white', textDecoration: 'none' }}
//               >
//                 <Button color='inherit' size='large'>
//                   Sign In
//                 </Button>
//               </NavLink>
//             )}
//           </Toolbar>
//         </div>
//       </AppBar>
//     </header>
//   );
// };

// export default Header;
