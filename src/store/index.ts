import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from './features/currentUserSlice';
import activeFestivalReducer from './features/festivalsSlice';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    activeFestival: activeFestivalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
