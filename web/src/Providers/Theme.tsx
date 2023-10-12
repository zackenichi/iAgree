import React, { FC } from 'react';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { theme } from '../theme';

export const ThemeProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <>{children}</>
    </MuiThemeProvider>
  );
};
