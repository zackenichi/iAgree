import { FC } from 'react';
import { ThemeProvider } from './Theme';
import { Provider } from 'react-redux';
import { store } from '../store';
import { BrowserRouter } from 'react-router-dom';
import { PropsWithChildren } from '../resources/interfaces/PropsWithChildren';
import { AuthProvider } from './Auth';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  );
};
