import { createTheme, darkScrollbar } from '@mui/material';
import { colours } from '../utils/constants';

export const fsDarkTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...darkScrollbar(),
          backgroundColor: colours.darkMode.secondary,
        },
      },
    },
  },

  palette: {
    mode: 'dark',
    primary: {
      main: colours.darkMode.primary,
    },
    background: {
      default: colours.darkMode.secondary,
      paper: colours.darkMode.tertiary,
    },
    text: {
      primary: colours.darkMode.text,
    },
  },
});
