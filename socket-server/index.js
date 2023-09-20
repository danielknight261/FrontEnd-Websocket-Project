const express = require('express');
const expressWs = require('express-ws');
const cors = require('cors');

const app = express();
const wsInstance = expressWs(app);

app.use(cors({
  origin: 'http://localhost:3001', // Adjust this to your frontend URL
}));

app.ws('/', (ws, req) => {
  console.log('Client connected to WebSocket');

  const sendRandomNumber = () => {
    try {
      const randomNumber = Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000;
      ws.send(randomNumber.toString()); // Send the random number as a string to the client
    } catch (error) {
      console.error('Error sending WebSocket message:', error);
    }
  };
  const intervalId = setInterval(sendRandomNumber, 100);

  ws.on('close', () => {
    clearInterval(intervalId);
    console.log('Client disconnected from WebSocket');
  });
});

app.listen(8080, () => {
  console.log('Express server started on port 8080');
});
