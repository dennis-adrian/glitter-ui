import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from './features/currentUserSlice';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
