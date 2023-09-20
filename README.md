# Quadra Challenge

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

## Run websocket server
> npm i
> 
> node ./index.js 

Steps: Install Depens
Backend /
Frontend Client - Next 13 , tailwind, reudx, websocket
MiddleWare setup 

Hosting: Vercel - Frontend

Heroku Backend - ?

Notes: Fun task, little challenging getting Redux to work with Next 13, the documentation is very limited and the intergration of Redux into the latest version of Next is not yet updated as far as i was able to find. Strangley enough one of the bigger issues was something minor which was adding 'use client' at the top of the relevant pages in order to get the application to work. Something ive only seen once before when playing around next 13 in its experimental pahse.

Redux state, held in randomNumberSlice.ts , provider.tsx and the store.tsx and then passed in the componeond called RandomNumberGenerator.tsx

Colours matched as closely as possible using a Hex colour finder tool, only one that off id the red. 

Added , a simple line of error handling to the websocket on the backend also. 



