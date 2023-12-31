const express = require('express');
const sequelize = require('./src/config/db');
const {
	importDataFromCSV,
	bulkInsertApartments,
} = require('./src/utils/dataImporter');
const cors = require('cors');
const router = require('./src/routes/index');

const PORT = 3000;

const app = express();

app.use(cors());
app.use('/api', router);

app.use(
	express.urlencoded({
		extended: false,
	})
);
app.use(express.json());

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();

		const csvFilePath = './src/flats_data.csv';
		const data = await importDataFromCSV(csvFilePath);
		await bulkInsertApartments(data);

		app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
	} catch (error) {
		console.log(error);
	}
};

start();
