import { test, describe } from "node:test"
import * as assert from "node:assert"
import { Queue } from "./queue.js";

describe("Queue", () => {

	test("enqueue", () => {
		const queue = new Queue();
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);
		assert.strictEqual(queue.size(), 3);
	});

	test("dequeue", () => {
		const queue = new Queue();
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);
		assert.strictEqual(queue.dequeue(), 1);
		assert.strictEqual(queue.dequeue(), 2);
		assert.strictEqual(queue.dequeue(), 3);
		assert.strictEqual(queue.dequeue(), undefined);
		assert.strictEqual(queue.size(), 0);
	});

	test("peek", () => {
		const queue = new Queue();
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);
		assert.strictEqual(queue.peek(), 1);
		assert.strictEqual(queue.size(), 3);
	});

	test("isEmpty", () => {
		const queue = new Queue();
		assert.strictEqual(queue.isEmpty(), true);
		queue.enqueue(1);
		assert.strictEqual(queue.isEmpty(), false);
		queue.dequeue();
		assert.strictEqual(queue.isEmpty(), true);
	});

	test("size", () => {
		const queue = new Queue();
		assert.strictEqual(queue.size(), 0);
		queue.enqueue(1);
		assert.strictEqual(queue.size(), 1);
		queue.enqueue(2);
		assert.strictEqual(queue.size(), 2);
		queue.enqueue(3);
		assert.strictEqual(queue.size(), 3);
		queue.dequeue();
		assert.strictEqual(queue.size(), 2);
		queue.dequeue();
		assert.strictEqual(queue.size(), 1);
		queue.dequeue();
		assert.strictEqual(queue.size(), 0);
	});

	test("clear", () => {
		const queue = new Queue();
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);
		queue.clear();
		assert.strictEqual(queue.size(), 0);
		assert.strictEqual(queue.isEmpty(), true);
	});

})

