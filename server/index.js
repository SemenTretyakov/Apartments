const express = require('express');
const sequelize = require('./src/db');
const apartmentRoutes = require('./src/routes/apartment');
const {
	importDataFromCSV,
	bulkInsertApartments,
} = require('../server/src/utils/dataImporter');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/apartments', apartmentRoutes);

app.use(
	express.urlencoded({
		extended: false,
	})
);

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Working!!!' });
});

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
