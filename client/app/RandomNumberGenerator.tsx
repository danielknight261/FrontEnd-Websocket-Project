'use client'

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './GlobalRedux/store'

import {
  setRandomNumber,
  setPreviousNumber,
  setNumberColor,
} from './GlobalRedux/Features/counter/randomNumberSlice'; // Import the actions from your randomNumberSlice

const RandomNumberGenerator = () => {
  const dispatch = useDispatch();
  const randomNumber = useSelector((state: RootState) => state.randomNumber.value);
  const previousNumber = useSelector((state: RootState) => state.randomNumber.previousValue);
  const numberColor = useSelector((state: RootState) => state.randomNumber.color);

  const socket = new WebSocket('ws://localhost:8080'); // WebSocket server URL

  // Handle WebSocket messages
  useEffect(() => {
    socket.addEventListener('message', (event) => {
      const newNumber = event.data;

      // Dispatch actions to update Redux state
      dispatch(setRandomNumber(newNumber));

      if (previousNumber !== null) {
        if (parseFloat(newNumber) > parseFloat(previousNumber)) {
          dispatch(setNumberColor('text-green-500'));
        } else if (parseFloat(newNumber) < parseFloat(previousNumber)) {
          dispatch(setNumberColor('text-red-500'));
        } else {
          dispatch(setNumberColor('text-white'));
        }
      }

      dispatch(setPreviousNumber(newNumber));
    });

    return () => {
      socket.close();
    };
  }, [dispatch, previousNumber]);

  return (
    <div>
      {/* Display the random number received from the WebSocket */}
      {randomNumber && (
        <div className={numberColor}>Random Number: {randomNumber}</div>
      )}
    </div>
  );
};

export default RandomNumberGenerator;
