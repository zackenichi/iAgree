import ReactDOM from 'react-dom/client';

import App from './App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CssBaseline>
  </ThemeProvider>
);
