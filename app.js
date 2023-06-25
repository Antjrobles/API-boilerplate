const express = require('express');       // Import express
const app = express();                  // Create a const app to use express
const morgan = require('morgan');         // Log every request to the console
require('dotenv').config();              // Import dotenv to use .env file
const routes = require('./routes/routes.js');  // Import routes.js




const port = process.env.PORT || 3000;       // Import the variable PORT from .env
const localhost = process.env.LOCALHOST || 'localhost';   // Import the variable LOCALHOST from .env

// APP SETUP
app.use(morgan('dev'));  // log every request to the console
app.use(express.json());  // parse requests of content-type - application/json
app.use('/', routes);          // Use routes.js

app.listen(port, localhost, () => {
  console.log(`server listening on ${port} on ${localhost}`)
});                              // Arrow function to tell the app use port and localhost as parameters and print in the console the information using template string.      


