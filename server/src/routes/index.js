const express = require('express');
const router = express.Router();
const apartmentRouter = require('./apartment.routes');
const Apartment = require('../models/apartment.model');

// Маршрут для получения списка квартир
router.get('/apartments', async (req, res) => {
	try {
		const apartments = await Apartment.findAll();
		res.json(apartments);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'An error occurred' });
	}
});

router.get('/apartments/:id', async (req, res) => {
	const apartmentId = req.params.id;
	try {
		const apartment = await Apartment.findByPk(apartmentId);
		if (!apartment) {
			return res.status(404).json({ error: 'Apartment not found' });
		}
		res.json(apartment);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'An error occurred' });
	}
});

router.get('/search', async (req, res) => {
	try {
		const apartments = await Apartment.findAll();

		const searchTerm = req.query.searchTerm;

		const searchResults = apartments.filter((product) =>
			product.rooms.toString().toLowerCase().includes(searchTerm.toLowerCase())
		);

		res.json(searchResults);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

router.use('/apartments', apartmentRouter);

module.exports = router;
