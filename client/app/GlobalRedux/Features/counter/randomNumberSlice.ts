'use client';

import { createSlice } from '@reduxjs/toolkit';

interface RandomNumberState {
  value: string | null;
  previousValue: string | null;
  color: string;
}

const initialState: RandomNumberState = {
  value: null,
  previousValue: null,
  color: 'text-black',
};

const randomNumberSlice = createSlice({
  name: 'randomNumber',
  initialState,
  reducers: {
    setRandomNumber: (state, action) => {
      state.value = action.payload;
    },
    setPreviousNumber: (state, action) => {
      state.previousValue = action.payload;
    },
    setNumberColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const {
  setRandomNumber,
  setPreviousNumber,
  setNumberColor,
} = randomNumberSlice.actions;

export default randomNumberSlice.reducer;
