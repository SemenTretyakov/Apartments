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

router.get('/api/search', async (req, res) => {
	const { term } = req.query;

	try {
		const results = await Apartment.findAll({
			where: {
				// Здесь вы можете определить условия поиска в зависимости от вашей модели
				// Например, для поиска по названию квартиры, если у вас есть поле "title":
				title: {
					[Op.iLike]: `%${term}%`, // iLike выполняет поиск без учета регистра
				},
			},
		});

		res.json(results);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'An error occurred' });
	}
});

router.use('/apartments', apartmentRouter);

module.exports = router;
