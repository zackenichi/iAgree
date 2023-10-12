import { Box } from '@mui/material';
import { FC, useContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { routes as appRoutes } from '../../routes';
import { Header } from '../Header';
import NotFound from '../../pages/NotFound';
import { ContentArea } from '../ContentArea';
import { AuthContext } from '../../Providers';

const App: FC = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

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

export { App };
