const express = require('express');
const router = express.Router();
const apartmentRouter = require('./apartment.routes');
const getApartmentById = require('../controllers/getApartmentById.controller');
const getApartment = require('../controllers/getApartments.controller');

router.get('/apartments/:id', getApartmentById);
router.get('/apartments', getApartment);

router.use('/apartments', apartmentRouter);

module.exports = router;
