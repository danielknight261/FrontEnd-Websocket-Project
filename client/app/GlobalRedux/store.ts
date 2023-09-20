'use client';

import { configureStore } from '@reduxjs/toolkit';
import randomNumberReducer from './Features/counter/randomNumberSlice';

// Configure and create a Redux store
export const store = configureStore({
  reducer: {
    randomNumber: randomNumberReducer, // Add the randomNumberReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
