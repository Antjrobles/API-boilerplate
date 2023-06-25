const express = require('express');
const fs = require('fs');

const router = express.Router();

// ENDPOINTS


// HOME //
router.get('/', (req, res) => {
  res.send('<h1>Welcome Home!</h1>');
});

// LINKS
router.get('/api/links', (req, res) => {
  const links = {
    grid: 'https://codepen.io/Antjrobles/pen/qBJwjWV',
    crypto_marquee: 'https://codepen.io/Antjrobles/pen/OJBzMEB',
  };
  res.send(links);
});


//DATA
router.get('/api/data', (req, res) => {
  const data = {
    name: 'John Doe',
    age: 25,
    city: 'San Diego',
    state: 'California',
    country: 'United States',
    hobbies: ['coding', 'reading', 'gaming', 'hiking', 'traveling'],
  };
  res.send(data);
});

// Coverage by protected areas of important sites for mountain biodiversity
router.get('/api/protected_areas', (req, res) => {
  const json = fs.readFileSync('./dataset/coverage.json');
  const jsonData = JSON.parse(json);
  res.json(jsonData);
});


// Countries
const getCountries = (req, res) => {
  const json = fs.readFileSync('./dataset/coverage.json');
  const jsonData = JSON.parse(json);
  const uniqueCountries = {};
  const countries = [];

  for (let i = 0; i < jsonData.length; i++) {
    const country = jsonData[i].Entity;

    if (!uniqueCountries[country]) {
      uniqueCountries[country] = true;
      countries.push(country);
    }
  }
  res.json(countries);
};
router.get('/api/countries', getCountries);



// CODE
const getCodes = (req, res) => {

  const json = fs.readFileSync('./dataset/coverage.json');
  const jsonData = JSON.parse(json);
  const uniqueCodes = {};
  const codes = [];

  for (let i = 0; i < jsonData.length; i++) {
    const code = jsonData[i].Code;

    if (!uniqueCodes[code]) {
      uniqueCodes[code] = true;
      codes.push(code);
    }
  }
  res.json(codes);
};
router.get('/api/codes', getCodes);











module.exports = router;
