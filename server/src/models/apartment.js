const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Apartment = sequelize.define('Apartment', {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
		unique: true,
	},
	floor: DataTypes.INTEGER,
	pos_on_floor: DataTypes.INTEGER,
	price: DataTypes.INTEGER,
	rooms: DataTypes.INTEGER,
	area_total: DataTypes.DECIMAL(5, 2),
	area_kitchen: DataTypes.DECIMAL(5, 2),
	area_live: DataTypes.DECIMAL(5, 2),
	layout_image: DataTypes.STRING,
});

module.exports = Apartment;
