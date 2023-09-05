const fs = require('fs');
const express = require('express');
const router = express.Router();

const getHome = (req, res) => {
  res.send('<h1>Welcome Home!</h1>');
};

const getLinks = (req, res) => {
  const links = {
    grid: 'https://codepen.io/Antjrobles/pen/qBJwjWV',
    crypto_marquee: 'https://codepen.io/Antjrobles/pen/OJBzMEB',
  };
  res.send(links);
};

const getData = (req, res) => {
  const data = {
    name: 'John Doe',
    age: 25,
    city: 'San Diego',
    state: 'California',
    country: 'United States',
    hobbies: ['coding', 'reading', 'gaming', 'hiking', 'traveling'],
  };
  res.send(data);
};



// Coverage by protected areas of important sites for mountain biodiversity
const json = fs.readFileSync('./dataset/coverage.json');
const jsonData = JSON.parse(json);

const getProtectedAreas = (req, res) => {
  res.json(jsonData);
};

// Countries
const getCountries = (req, res) => {
  const { filter } = req.query;    // Obtain the filter parameter from the query string
  const uniqueCountries = {};   // Create an object to store the unique countries
  const countries = [];               // Create an array to store the countries

  for (let i = 0; i < jsonData.length; i++) {
    const country = jsonData[i].Entity;

    // remove duplicates from the countries array
    if (!uniqueCountries[country]) {
      uniqueCountries[country] = true;

      // check if the country includes the filter parameter
      if (filter) {
        if (country.toLowerCase().includes(filter.toLowerCase())) {
          countries.push(country);
        }
      } else {
        countries.push(country);
      }
    }
  }
  res.json(countries);
};
// query sample: http://192.168.0.52:3045/api/countries?filter=United


// CODE
const getCodes = (req, res) => {
  const { filter } = req.query;    // Obtain the filter parameter from the query string
  const uniqueCodes = {};
  const codes = [];

  for (let i = 0; i < jsonData.length; i++) {
    const code = jsonData[i].Code;

    if (!uniqueCodes[code]) {
      uniqueCodes[code] = true;

      // check if the country includes the filter parameter
      if (filter) {
        if (code.toLowerCase().includes(filter.toLowerCase())) {
          codes.push(code);
        }
      } else {
        codes.push(code);
      }
    }
  }
  res.json(codes);
};

module.exports = { getHome, getLinks, getData, getProtectedAreas, getCountries, getCodes };










