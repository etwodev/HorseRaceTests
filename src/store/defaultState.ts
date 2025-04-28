import { AppState, defaultAppState } from './slices/appSlice';

export type StoreState = AppState;

export const defaultState: AppState = { ...defaultAppState };
