import { ThemeOptions, createTheme } from '@mui/material/styles';
import colors from './colors';

const componentOverrides: ThemeOptions['components'] = {
  MuiTypography: {
    styleOverrides: {
      h1: {
        fontSize: '2.5rem',
        fontWeight: 600,
        color: colors.primary,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
      },
    },
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.background,
      paper: colors.background,
    },
  },
  components: componentOverrides,
});

export { theme };
