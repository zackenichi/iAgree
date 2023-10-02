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
      body2: {
        fontSize: '16px',
        fontWeight: 400,
        textDecoration: 'underline',
        '&:hover': {
          cursor: 'pointer',
        },
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
