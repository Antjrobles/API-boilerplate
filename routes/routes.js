const express = require('express');
const controller = require('../controllers/controllers.js');
const expressOasGenerator = require('express-oas-generator');

const router = express.Router();

// ENDPOINTS
router.get('/api/links', controller.getLinks);
router.get('/api/data', controller.getData);
router.get('/api-docs/v3');

// Coverage by protected areas of important sites for mountain biodiversity
router.get('/api/countries', controller.getCountries);
router.get('/api/codes', controller.getCodes);


module.exports = router;
