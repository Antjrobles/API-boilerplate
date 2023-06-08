const express = require('express');       // Import express
require('dotenv').config();              // Import dotenv to use .env file
const app = express();                  // Create a const app to use express



port = process.env.PORT || 3000;       // Import the variable PORT from .env
localhost = process.env.LOCALHOST || 'localhost';   // Import the variable LOCALHOST from .env

// APP SETUP
app.listen(port, localhost, () => {
  console.log(`server listening on ${port} on ${localhost}`)
});                              // Arrow function to tell the app use port and localhost as parameters and print in the console the information using template string.      







