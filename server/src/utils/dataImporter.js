const fs = require('fs');
const csv = require('csv-parser');
const Apartment = require('../models/apartment.model');

async function importDataFromCSV(filePath) {
	try {
		const results = [];

		await new Promise((resolve, reject) => {
			fs.createReadStream(filePath)
				.pipe(csv({ delimiter: ',' }))
				.on('data', (data) => {
					data.area_total = parseFloat(data.area_total.replace(',', '.'));
					data.area_kitchen = parseFloat(data.area_kitchen.replace(',', '.'));
					data.area_live = parseFloat(data.area_live.replace(',', '.'));
					results.push(data);
				})
				.on('end', () => {
					resolve(results);
				})
				.on('error', (error) => {
					reject(error);
				});
		});

		return results;
	} catch (error) {
		throw error;
	}
}

async function bulkInsertApartments(data) {
	try {
		await Apartment.bulkCreate(data, {
			updateOnDuplicate: [
				'floor',
				'pos_on_floor',
				'price',
				'rooms',
				'area_total',
				'area_kitchen',
				'area_live',
				'layout_image',
			],
		});
		console.log('Data loaded from CSV file');
	} catch (error) {
		throw error;
	}
}

module.exports = { importDataFromCSV, bulkInsertApartments };
