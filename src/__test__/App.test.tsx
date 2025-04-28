import { RenderResult, render, screen } from '@testing-library/react';
import React from 'react';
import { App } from '../App';

describe('App.tsx', () => {
  const subject = (): RenderResult => render(<App />);

  describe('when the application is enabled', () => {
    it('renders the dom', () => {
      subject();

      expect(screen.getByText('VITE + REACT + TS')).toBeInTheDocument();
    });
  });
});
