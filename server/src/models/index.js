const { Sequelize } = require("sequelize");
const User = require("./User");
const Card = require("./Card");
const Attack = require("./Attack");
const Deck = require("./Deck");

// set up the associations here
User.hasOne(Deck);
Deck.belongsTo(User);

Deck.hasMany(Card);
Card.belongsTo(Deck);

Card.hasMany(Attack);
Attack.hasMany(Card);

// and then export them all below
module.exports = { 
	User,
	Card,
	Attack,
	Deck,
};
