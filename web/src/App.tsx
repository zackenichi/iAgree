import { Box, Container } from '@mui/material';
import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes as appRoutes } from './routes';

const App: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Set min-height to 100vh for vertical centering
      }}
    >
      <Container maxWidth="md" data-testid="app-container">
        {/* <Box
          sx={{
            flexGrow: 1,
            p: 4,
          }}
        >
          
          
        </Box> */}

        <Box height="100vh" display="flex" flexDirection="column">
          <Router>
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </Router>
        </Box>
      </Container>
    </Box>
  );
};

export default App;
