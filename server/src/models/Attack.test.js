const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Attack } = require(".");
const db = require("../db/config");

// define in global scope
let attack;

// clear db and create new user before tests
beforeAll(async () => {
	await db.sync({ force: true });
	attack = await Attack.create({ 
		title: "punch", 
		mojoCost: 8, 
		staminaCost: 4, 
	});
});

// clear db after tests
afterAll(async () => await db.close());

describe("Attack", () => {
	it("id column exists", async () => {
		expect(attack).toHaveProperty("id");
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
