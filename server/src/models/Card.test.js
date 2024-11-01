const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Card } = require(".");
const db = require("../db/config");

// define in global scope
let card;

// clear db and create new user before tests
beforeAll(async () => {
	await db.sync({ force: true });
	card = await Card.create({ 
		name: "gandalf",
		mojo: 5,
		stamina: 8, 
		imgUrl: "https://google.com",
	});
});

// clear db after tests
afterAll(async () => await db.close());

describe("Card", () => {
	it("id column exists", async () => {
		expect(card).toHaveProperty("id");
	});

	/**
	 * Create more tests
	 * E.g. check that the username of the created user is actually gandalf
	 */
	/**
	it("username column exists", async () => {
		expect(user).toHaveProperty("username");
	});

	it("username column is set correctly", async () => {
		expect(user.username).toEqual("gandalf");
	});
	 */
});
