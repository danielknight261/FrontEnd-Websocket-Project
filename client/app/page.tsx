'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react';

import type { RootState } from './GlobalRedux/store'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from './GlobalRedux/Features/counter/counterSlice'

// Create a WebSocket connection
const socket = new WebSocket('ws://localhost:8080'); //  WebSocket server URL

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [randomNumber, setRandomNumber] = useState<string | null>(null);
  const [previousNumber, setPreviousNumber] = useState<number | null>(null);


  // Handle WebSocket messages
  useEffect(() => {
    socket.addEventListener('message', (event) => {
      // Handle incoming messages from the WebSocket server
      setRandomNumber(event.data);
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <main>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</button>
<div className="bg-red text-red">Tailwind Test</div>
      {/* Display the random number received from the WebSocket */}
      {randomNumber && (
        <div className="bg-red text-red">Random Number: {randomNumber}</div>
      )}
    </main>
  );
}