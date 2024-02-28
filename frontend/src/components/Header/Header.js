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
import VinylLogo from '../../images/vinyl.png';

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
                <img
                  src={VinylLogo}
                  alt='Vinyl Store Logo'
                  style={{ marginRight: '10px', height: '30px' }}
                />
                VINYL STORE
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
