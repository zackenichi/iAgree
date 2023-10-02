import ReactDOM from 'react-dom/client';

import App from './App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import { CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </ThemeProvider>
);
