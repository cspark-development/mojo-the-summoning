const { DataTypes } = require("sequelize");
const db = require("../db/config");

// create your Attack model here
const Attack = db.define("Attack", {
	title: DataTypes.STRING,
	mojoCost: DataTypes.INTEGER,
	staminaCost: DataTypes.INTEGER,
});

module.exports = Attack;
