const express = require('express');
const controller = require('../controllers/controllers.js');
const router = express.Router();


// ENDPOINTS

// ENDPOINTS
// router.get('/', controller.getHome);
router.get('/api/links', controller.getLinks);
router.get('/api/data', controller.getData);



// Coverage by protected areas of important sites for mountain biodiversity
router.get('/api/protected_areas', controller.getProtectedAreas);
router.get('/api/countries', controller.getCountries);
router.get('/api/codes', controller.getCodes);











module.exports = router;
