import ReactDOM from 'react-dom/client';
import { App } from './components/App';

import React from 'react';
import { AppProvider } from './Providers/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
