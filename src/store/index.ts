import { create } from 'zustand';

import { AppSlice, createAppSlice } from './slices/appSlice';

export type Store = AppSlice;

export const useStore = create<Store>((set, get, store) => ({
  ...createAppSlice(set, get, store),
}));
