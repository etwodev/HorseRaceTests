import { StateCreator } from 'zustand';

import { Store } from '..';

export interface AppState {
  isDarkMode: boolean;
}

export type AppActions = {
  setIsDarkMode(isDarkMode: AppState['isDarkMode']): void;
};

export type AppSlice = AppState & AppActions;

/** This object enables us to reset state on the fly */
export const defaultAppState: AppState = {
  isDarkMode: true,
};

export const createAppSlice: StateCreator<Store, [], [], AppSlice> = set => ({
  ...defaultAppState,

  setIsDarkMode: isDarkMode => set({ isDarkMode }),
});
