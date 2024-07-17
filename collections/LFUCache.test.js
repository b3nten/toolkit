import { test, describe } from "node:test"
import * as assert from "node:assert"
import { LFUCache } from "./LFUCache.js";

describe("LFUCache", () => {

	test("get", () => {
		const cache = new LFUCache(10);
		cache.set(1, 1);
		cache.set(2, 2);
		cache.set(3, 3);
		assert.strictEqual(cache.get(1), 1);
		assert.strictEqual(cache.get(2), 2);
		assert.strictEqual(cache.get(3), 3);
		assert.strictEqual(cache.get(4), undefined);
	})

	test("set", () => {
		const cache = new LFUCache(2);
		cache.set(1, 1);
		cache.set(2, 2);
		cache.set(3, 3);
		assert.strictEqual(cache.get(1), undefined);
		assert.strictEqual(cache.get(2), 2);
		assert.strictEqual(cache.get(3), 3);
	})

	test("set & get", () => {
		const cache = new LFUCache(2);
		cache.set(1, 1);
		cache.set(2, 2);
		cache.get(1);
		cache.set(3, 3);
		assert.strictEqual(cache.get(1), 1);
		assert.strictEqual(cache.get(2), undefined);
		assert.strictEqual(cache.get(3), 3);
	})

	test("set & get 2", () => {
		const cache = new LFUCache(2);
		cache.set(1, 1);
		cache.set(2, 2);
		cache.get(1);
		cache.get(2);
		cache.set(3, 3);
		assert.strictEqual(cache.get(1), undefined);
		assert.strictEqual(cache.get(2), 2);
		assert.strictEqual(cache.get(3), 3);
	})

})

