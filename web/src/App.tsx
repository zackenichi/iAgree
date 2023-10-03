import { Box } from '@mui/material';
import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes as appRoutes } from './routes';
import { Header } from './components/Header';
import NotFound from './pages/NotFound';
import { ContentArea } from './components/ContentArea';

const App: FC = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        height: '100vh',
        gridTemplateRows: 'auto 1fr',
        gridTemplateAreas: `"header" "main"`,
      }}
      id="appContainer"
    >
      <Box
        sx={{
          gridArea: 'header',
        }}
      >
        <Header />
      </Box>
      <ContentArea>
        <Routes>
          {appRoutes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={<route.component />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContentArea>
    </Box>
  );
};

export default App;
