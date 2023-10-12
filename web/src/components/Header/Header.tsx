import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { routes } from '../../routes';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FC, useContext, useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, IconButton } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Search } from '../Search';
import { useIsSmallScreen } from '../../hooks';
import { AuthContext } from '../../Providers';

const Header: FC = () => {
  const { pathname: current } = useLocation();
  const [notifCount, setNotifCount] = useState(0);

  const { currentUser, signOut } = useContext(AuthContext);

  const isSmallScreen = useIsSmallScreen();

  const navigate = useNavigate();

  // test action before we have db
  const handleAddNotif = () => {
    setNotifCount(notifCount + 1);
  };

  const handleLogin = () => {
    if (currentUser) {
      // log out
      signOut();
    } else {
      // log in
      navigate('/login');
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1, alignItems: 'center' }}>
      <AppBar position="static">
        <Toolbar>
          <Box
            display="flex"
            alignItems="center"
            onClick={handleLogoClick}
            sx={{ cursor: 'pointer ' }}
          >
            <HandshakeIcon />
            <Typography variant="h6" component="div">
              iAgree
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-start',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: '1rem',
              }}
            >
              {currentUser &&
                routes
                  .filter((page) => page.key !== 'login-route')
                  .map((page) => (
                    <Box key={page.key}>
                      <Link to={page.path} style={{ textDecoration: 'none' }}>
                        <Typography
                          color={current === page.path ? 'yellow' : 'white'}
                          sx={{
                            marginRight: '1rem',
                            fontWeight: 'bold',
                            '&:hover': {
                              color: 'yellow',
                            },
                          }}
                        >
                          {page.title}
                        </Typography>
                      </Link>
                    </Box>
                  ))}
            </Box>
          </Box>
          <Box textAlign="right">
            <Search />
          </Box>
          <Box>
            <IconButton onClick={handleAddNotif}>
              <Badge
                badgeContent={notifCount}
                color="warning"
                invisible={!Boolean(notifCount)}
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
          {isSmallScreen ? (
            <LoginIcon />
          ) : (
            <Button color="inherit" variant="outlined" onClick={handleLogin}>
              {currentUser ? 'Logout' : 'Login'}
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { Header };
