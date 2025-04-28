import { Container, Box, FormControlLabel, Switch } from '@mui/material';
import React from 'react';
import { useStore } from '../../store';
import { useShallow } from 'zustand/react/shallow';

export const LandingPage: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useStore(
    useShallow(state => ({
      isDarkMode: state.isDarkMode,
      setIsDarkMode: state.setIsDarkMode,
    })),
  );

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkMode(event.target.checked);
  };

  return (
    <Container>
      <Box
        height={'100vh'}
        display={'flex'}
        alignItems={'center'}
        flexDirection={'column'}
        justifyContent={'center'}
      >
        <h1>VITE + REACT + TS</h1>
        <FormControlLabel
          control={<Switch checked={isDarkMode} onChange={handleChecked} />}
          label={isDarkMode ? 'Dark Mode' : 'Light Mode'}
        />
      </Box>
    </Container>
  );
};
