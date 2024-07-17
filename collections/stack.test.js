import { test, describe } from "node:test"
import * as assert from "node:assert"
import { Stack } from "./stack.js";

describe("Stack", () => {

	test("push", () => {
		const stack = new Stack();
		stack.push(1);
		stack.push(2);
		assert.strictEqual(stack.size(), 2);
	});

	test("pop", () => {
		const stack = new Stack();
		stack.push(1);
		stack.push(2);
		stack.push(3);
		assert.strictEqual(stack.pop(), 3);
		assert.strictEqual(stack.pop(), 2);
		assert.strictEqual(stack.pop(), 1);
		assert.strictEqual(stack.pop(), undefined);
		assert.strictEqual(stack.size(), 0);
	});

	test("peek", () => {
		const stack = new Stack();
		stack.push(1);
		stack.push(2);
		stack.push(3);
		assert.strictEqual(stack.peek(), 3);
		assert.strictEqual(stack.size(), 3);
	});

	test("isEmpty", () => {
		const stack = new Stack();
		assert.strictEqual(stack.isEmpty(), true);
		stack.push(1);
		assert.strictEqual(stack.isEmpty(), false);
		stack.pop();
		assert.strictEqual(stack.isEmpty(), true);
	});

	test("size", () => {
		const stack = new Stack();
		assert.strictEqual(stack.size(), 0);
		stack.push(1);
		assert.strictEqual(stack.size(), 1);
		stack.push(2);
		assert.strictEqual(stack.size(), 2);
		stack.push(3);
		assert.strictEqual(stack.size(), 3);
		stack.pop();
		assert.strictEqual(stack.size(), 2);
		stack.pop();
		assert.strictEqual(stack.size(), 1);
		stack.pop();
		assert.strictEqual(stack.size(), 0);
	});

	test("clear", () => {
		const stack = new Stack();
		stack.push(1);
		stack.push(2);
		stack.push(3);
		stack.clear();
		assert.strictEqual(stack.size(), 0);
		assert.strictEqual(stack.isEmpty(), true);
	});

	test("iterator", () => {
		const stack = new Stack();
		stack.push(1);
		stack.push(2);
		stack.push(3);
		const values = [];
		for (const value of stack) {
			values.push(value);
		}
		assert.deepStrictEqual(values, [3, 2, 1]);
	});

})

