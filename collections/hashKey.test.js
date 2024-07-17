import { test, describe } from "node:test"
import * as assert from "node:assert"
import { hashKey, safeHashKey } from "./hashKey.js";

describe("hashKey", () => {

	test("hashes a key to a string", () => {
		const key = { a: 1, b: 2, c: 3 };
		assert.strictEqual(hashKey(key), '{"a":1,"b":2,"c":3}');
	})

	test("hashes a key to a string safely", () => {
		const key = { a: 1, b: 2, c: 3 };
		assert.strictEqual(safeHashKey(key), '{"a":1,"b":2,"c":3}');
	})

	test("hashes a key to a string safely with circular references", () => {
		const key = { a: 1, b: 2, c: 3 };
		key.d = key;
		assert.strictEqual(safeHashKey(key), key);
	})

	test("maintains the order of keys", () => {
		const key = { b: 2, a: 1, c: 3 };
		assert.strictEqual(hashKey(key), '{"a":1,"b":2,"c":3}');
		assert.strictEqual(safeHashKey(key), '{"a":1,"b":2,"c":3}');
	})

})

