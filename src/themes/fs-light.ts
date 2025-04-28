import { createTheme } from '@mui/material';
import { colours } from '../utils/constants';

export const fsLightTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colours.lightMode.secondary,
        },
      },
    },
  },

  palette: {
    mode: 'light',
    primary: {
      main: colours.lightMode.primary,
    },
    background: {
      default: colours.lightMode.secondary,
      paper: colours.lightMode.tertiary,
    },
    text: {
      primary: colours.lightMode.text,
    },
  },
});
