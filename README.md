
# Quadra Challenge

## Deployment

Backend Deployment:

Install Dependencies:
Open a terminal on the server.
Navigate to the backend directory: cd socket-server
Run npm install to install project dependencies.

Start the backend server with 'node index'

Frontend Deployment:
Open a terminal on the server.
Navigate to the frontend directory: cd client
Run npm install to install project dependencies.

Start the frontend with 'npm run dev'
```


## Tech Stack

**Client:** React, Redux, TailwindCSS, Next 13

**Server:** Node, Express , Websocket


## Related

A fun and challenging task few complications were integrating Redux with Next.js version 13. The documentation for this particular integration is quite limited, and it appears that the integration of Redux with the latest version of Next.js hasn't been thoroughly updated as of my research.

The Redux state is managed within multiple files, primarily in randomNumberSlice.ts, provider.tsx, and store.tsx. This state is then passed down to components, notably in the component named RandomNumberGenerator.tsx.

In terms of design, I made efforts to match colours as closely as possible. I utilised a Hex color finder tool to ensure consistency

Additionally, I implemented a simple error handling mechanism in the WebSocket functionality on the backend.

This project was an enjoyable challenge.

## Next Step

Hosting: Front and Backend using Vercel and perhaps Heroku


## Instructions
Create a project in NextJS 13
 that will communicate via websocket
  and receive a number between 1000000 and 9999999 every 100ms,
  
   the number must be stored in the redux state. 
   
   Create a client side component to display the numbers received, only the number must be client side. 
   The prototype sent is very simple just to exemplify the idea, 
   but feel free to create the style you prefer and show your skills with tailwindcss.

## Bonus
Change the number color under the following conditions:
* When the new value is greater than the previous one, it changes to green
* When the new value is lower than the previous one, it changes to red
* If it is the same, change it to white

## Requirements
* NextJS 13
* Tailwindcss
* Redux Toolkit
* Typescript
* Redux middleware to integrate websocket

