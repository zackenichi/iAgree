import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { routes } from '../../routes';
import { Link, useLocation } from 'react-router-dom';
import { FC } from 'react';

const Header: FC = () => {
  const { pathname: current } = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
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
              justifyContent: 'flex-start', // Align links to the left on larger screens
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
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { Header };
