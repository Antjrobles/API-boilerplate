const fs = require('fs');


// Coverage by protected areas of important sites for mountain biodiversity
const getProtectedAreas = (req, res) => {
  const json = fs.readFileSync('./dataset/coverage.json');
  const jsonData = JSON.parse(json);
  res.json(jsonData);
};

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

module.exports = { getProtectedAreas, getCountries, getCodes };










