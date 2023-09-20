'use client';

import { configureStore } from '@reduxjs/toolkit';
import randomNumberReducer from './Features/counter/randomNumberSlice';

export const store = configureStore({
  reducer: {
    randomNumber: randomNumberReducer, // Add the randomNumberReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
