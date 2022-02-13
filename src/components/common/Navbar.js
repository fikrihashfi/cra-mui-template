import {
  AppBar,
  Avatar,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/navbar.css';
import '../../assets/css/style.css';
import { setAuth } from '../../redux/actions/Authentication';
import { pages } from '../../utils/params';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // return (
  //   <div id='navbar' className='d-flex flex-wrap'>
  //     <h4 style={{ margin: 0 }}>BAKARI</h4>
  //     <nav
  //       className='d-flex justify-content-between flex-wrap'
  //       style={{ flex: 1, margin: 0, marginLeft: '10px' }}
  //     >
  //       <div className='d-flex flex-wrap'>
  //         {Object.keys(pages).map((key, idx) => {
  //           return (
  //             <Link
  //               key={idx}
  //               className='link'
  //               to={`/admin/${pages[key].toLowerCase()}`}
  //             >
  //               {pages[key]}
  //             </Link>
  //           );
  //         })}
  //       </div>
  //       <div>
  //         <a
  //           className='link'
  //           href='#navbar'
  //           onClick={() => {
  //             dispatch(setAuth({ isLogin: false, user: {} }));
  //           }}
  //         >
  //           Logout
  //         </a>
  //       </div>
  //     </nav>
  //   </div>
  // );

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            WM BAKARI
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {Object.keys(pages).map((key, idx) => (
                <MenuItem key={idx} onClick={handleCloseNavMenu}>
                  <Link key={idx} to={`/admin/${pages[key].toLowerCase()}`} className="link">
                    <Typography textAlign="center">{pages[key]}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {Object.keys(pages).map((key, idx) => (
              <Button
                key={idx}
                onClick={()=>navigate(`/admin/${pages[key].toLowerCase()}`)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {key}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  textAlign="center"
                  onClick={() =>
                    dispatch(setAuth({ isLogin: false, user: {} }))
                  }
                >
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
