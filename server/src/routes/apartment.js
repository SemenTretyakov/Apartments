const express = require('express');
const router = express.Router();
const {
	importDataFromCSV,
	bulkInsertApartments,
} = require('../utils/dataImporter');

router.post('/import', async (req, res) => {
	try {
		const csvFilePath = './src/flats_data.csv';
		const data = await importDataFromCSV(csvFilePath);
		await bulkInsertApartments(data);

		res.status(200).json({ message: 'Data imported successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'An error occurred' });
	}
});

module.exports = router;
