'use client';

// Import createSlice from Redux Toolkit
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

// Create a Redux slice with actions and reducer
const randomNumberSlice = createSlice({
  name: 'randomNumber',
  initialState,
  reducers: {
    // Action to set the current random number
    setRandomNumber: (state, action) => {
      state.value = action.payload;
    },
     // Action to set the previous random number
    setPreviousNumber: (state, action) => {
      state.previousValue = action.payload;
    },
    // Action to set the text color to represent the number
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
