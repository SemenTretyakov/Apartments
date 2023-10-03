const Apartment = require('../models/apartment.model');

export const getAllApartments = async (req, res) => {
	const page = parseInt(req.query.page) - 1 || 0;
	const limit = parseInt(req.query.limit) || 5;
	const search = searchTerm || '';

	let orderBy;
	let orderDirection;

	switch (parseInt(req.query.sortParam)) {
		case 1:
			orderBy = 'price';
			orderDirection = 'asc';
			break;
		case 2:
			orderBy = 'price';
			orderDirection = 'desc';
			break;
		case 3:
			orderBy = 'area';
			orderDirection = 'asc';
			break;
		case 4:
			orderBy = 'area';
			orderDirection = 'desc';
			break;
		default:
			orderBy = '_id';
			orderDirection = 'asc';
			break;
	}

	try {
		const { rows: apartments, count: total } = await Apartment.findAndCountAll({
			where: {
				title: {
					[Sequelize.Op.iLike]: `%${search}%`,
				},
			},
			order: [[orderBy, orderDirection]],
			offset: page * limit,
			limit: limit,
		});

		const pageCount = Math.ceil(total / limit);

		res.json({
			apartments,
			total,
			page: page + 1,
			limit,
			pageCount,
		});
	} catch (err) {
		res.status(500).json({ error: 'An error occurred' });
	}
};
