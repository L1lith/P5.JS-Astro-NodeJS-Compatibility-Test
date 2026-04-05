This gist is a test project for seeing if the P5.js library can be imported successfully (without being called) in Astro.build & nodeJS.

See:
https://github.com/processing/p5.js/issues/6830#issuecomment-4186821350

## Launching the Web App
Step 1: `npm install`

Step 2: `npm run dev`

Step 3: Open your browser to whatever URL the terminal suggests, usually `https://localhost:4321` by default though it increments by 1 until it finds an unoccupied port.

## A note about the issue
The p5 library is being imported inside of `src/components/P5Test.jsx`. The component does not actually do anything besides attemping to load p5 on both the server and client, it never attempts to even use the library on either side.