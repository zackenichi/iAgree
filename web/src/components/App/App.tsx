import { Box } from '@mui/material';
import { FC, useContext, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { routes as appRoutes } from '../../routes';
import { Header } from '../Header';
import NotFound from '../../pages/NotFound';
import { ContentArea } from '../ContentArea';
import { AuthContext } from '../../Providers';
import { NotificationBar } from '../NotificationBar';

const App: FC = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!currentUser && isProtectedRoute(pathname)) {
      navigate('/login');
    }
  }, [currentUser, navigate, pathname]);

  const isProtectedRoute = (path: string) => {
    const route = appRoutes.find((r) => r.path === path);
    return route?.needsLogin || false;
  };

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
        <NotificationBar />
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
