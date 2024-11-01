const { DataTypes } = require("sequelize");
const db = require("../db/config");

// create your User model here
const User = db.define("User", {
	username: DataTypes.STRING,
});

module.exports = User;
