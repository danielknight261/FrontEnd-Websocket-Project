'use client'

import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../GlobalRedux/store'

import {
  setRandomNumber,
  setPreviousNumber,
  setNumberColor,
} from '../GlobalRedux/Features/counter/randomNumberSlice';

const RandomNumberGenerator = () => {
  const dispatch = useDispatch();
  const randomNumber = useSelector((state: RootState) => state.randomNumber.value);
  const previousNumber = useSelector((state: RootState) => state.randomNumber.previousValue);
  const numberColor = useSelector((state: RootState) => state.randomNumber.color);

  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    try {
      socketRef.current = new WebSocket('ws://localhost:8080');

      socketRef.current.addEventListener('message', (event) => {
        const newNumber = event.data;

        dispatch(setRandomNumber(newNumber));

      // Compare the new number with the previous number and set the color accordingly
      if (previousNumber !== null) {
        if (parseFloat(newNumber) > parseFloat(previousNumber)) {
          dispatch(setNumberColor('text-[#29bc29]'));
        } else if (parseFloat(newNumber) < parseFloat(previousNumber)) {
          dispatch(setNumberColor('text-red-500'));
        } else {
          dispatch(setNumberColor('text-white'));
        }
      }

      dispatch(setPreviousNumber(newNumber));
    });

    socketRef.current.addEventListener('error', (error) => {
      console.error('WebSocket error:', error);
    });

    socketRef.current.addEventListener('close', () => {
      console.log('WebSocket connection closed');
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  } catch (error) {
    console.error('WebSocket connection error:', error);
  }
}, [dispatch, previousNumber]);

  return (
    <div>
      {randomNumber && (
        <div className="bg-[#3b3e47] px-6 p-2 rounded-sm">
          <div className={numberColor}>{randomNumber}</div>
        </div>
      )}
    </div>
  );
};

export default RandomNumberGenerator;