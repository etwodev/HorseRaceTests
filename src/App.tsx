import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import React from 'react';

import { fsDarkTheme } from './themes/fs-dark';
import { LandingPage } from './components/LandingPage';
import { useStore } from './store';
import { fsLightTheme } from './themes/fs-light';

export const App: React.FC = () => {
  const { isDarkMode } = useStore(state => ({
    isDarkMode: state.isDarkMode,
  }));

  return (
    <ThemeProvider theme={isDarkMode ? fsDarkTheme : fsLightTheme}>
      <CssBaseline>
        <LandingPage />
      </CssBaseline>
    </ThemeProvider>
  );
};
