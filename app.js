const express = require('express');       // Import express
require('dotenv').config();              // Import dotenv to use .env file
const app = express();                  // Create a const app to use express



port = process.env.PORT || 3000;       // Import the variable PORT from .env
localhost = process.env.LOCALHOST || 'localhost';   // Import the variable LOCALHOST from .env

// APP SETUP
app.listen(port, localhost, () => {
  console.log(`server listening on ${port} on ${localhost}`)
});                              // Arrow function to tell the app use port and localhost as parameters and print in the console the information using template string.      


// HOME
app.get('/', (req, res) => {
  res.send(`<h1>"Welcome Home!"</h1>`)   //Home. Display a message
})

// ENDPOINTS
app.get('/api/codepens', (req, res) => {     
  const links = {
    grid: 'https://codepen.io/Antjrobles/pen/qBJwjWV',
    crypto_marquee: "https://codepen.io/Antjrobles/pen/OJBzMEB"
  };
  res.send(links);    // Display the links on the browser
});

app.get('/api/data', (req, res) => {
  
    const data = {
      name: 'John Doe',
      age: 25,
      city: 'San Diego',
      state: 'California',
      country: 'United States',
      hobbies: ['coding', 'reading', 'gaming', 'hiking', 'traveling'],
    }
    res.send(data);   // Display the data on the browser
})





