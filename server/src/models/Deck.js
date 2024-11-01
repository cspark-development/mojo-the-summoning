const { DataTypes } = require("sequelize");
const db = require("../db/config");

// create your Deck model here
const Deck = db.define("Deck", {
	name: DataTypes.STRING,
	xp: DataTypes.INTEGER,
});

module.exports = Deck;
