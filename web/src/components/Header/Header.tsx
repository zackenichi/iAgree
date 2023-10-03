import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { routes } from '../../routes';
import { Link, useLocation } from 'react-router-dom';
import { FC, useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, IconButton } from '@mui/material';
import { Search } from '../Search';

const Header: FC = () => {
  const { pathname: current } = useLocation();
  const [notifCount, setNotifCount] = useState(0);

  // test action before we have db
  const handleAddNotif = () => {
    setNotifCount(notifCount + 1);
  };

  const handleLogin = () => {
    // test action before we have login feature
    setNotifCount(0);
  };

  return (
    <Box sx={{ flexGrow: 1, alignItems: 'center' }}>
      <AppBar position="static">
        <Toolbar>
          <HandshakeIcon />
          <Typography variant="h6" component="div">
            iAgree
          </Typography>
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
              {routes.map((page) => (
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
          <Button color="inherit" onClick={handleLogin}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { Header };
