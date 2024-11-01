const { DataTypes } = require("sequelize");
const db = require("../db/config");

// create your Card model here
const Card = db.define("Card", {
	name: DataTypes.STRING,
	mojo: DataTypes.INTEGER,
	stamina: DataTypes.INTEGER,
	imgUrl: DataTypes.STRING,
});

module.exports = Card;
