const Apartment = require('../models/apartment.model');

async function getApartments(req, res) {
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
}

module.exports = getApartments;
