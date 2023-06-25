const express = require('express');
const controller = require('../controllers/controllers.js');


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
router.get('/api/protected_areas', controller.getProtectedAreas);
router.get('/api/countries', controller.getCountries);
router.get('/api/codes', controller.getCodes);











module.exports = router;
