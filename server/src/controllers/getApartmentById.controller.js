const Apartment = require('../models/apartment.model');

async function getApartmentById(req, res) {
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
}

module.exports = getApartmentById;
