const express = require('express');
const router = express.Router();
const apartmentRouter = require('./apartment.routes');
const Apartment = require('../models/apartment.model');

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

router.get('/apartments', async (req, res) => {
	try {
		const searchTerm = req.query.searchTerm;
		const priceSort = req.query.priceSort === 'asc' ? 'asc' : 'desc';
		const areaSort = req.query.areaSort === 'asc' ? 'asc' : 'desc';
		const page = parseInt(req.query.page) || 1;
		const pageSize = parseInt(req.query.pageSize) || 8;

		const apartments = await Apartment.findAll();

		const searchResults = apartments
			.filter((apartment) =>
				apartment.rooms
					.toString()
					.toLowerCase()
					.includes(searchTerm.toLowerCase())
			)
			.sort((a, b) => {
				if (areaSort === 'asc') {
					return a.area_total - b.area_total;
				} else {
					return b.area_total - a.area_total;
				}
			})
			.sort((a, b) => {
				if (priceSort === 'asc') {
					return a.price - b.price;
				} else {
					return b.price - a.price;
				}
			});

		const startIndex = (page - 1) * pageSize;
		const endIndex = startIndex + pageSize;
		const paginatedResults = searchResults.slice(startIndex, endIndex);

		res.json(paginatedResults);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

router.use('/apartments', apartmentRouter);

module.exports = router;
