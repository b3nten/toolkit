import { test, describe } from "node:test"
import * as assert from "node:assert"
import { SinglyLinkedList, DoublyLinkedList } from "./linkedList.js";

describe("SinglyLinkedList", () => {

	test("append", () => {
		const list = new SinglyLinkedList();
		list.append(1);
		list.append(2);
		list.append(3);
		assert.strictEqual(list.head.data, 1);
		assert.strictEqual(list.tail.data, 3);
		assert.strictEqual(list.length, 3);
	})

	test("prepend", () => {
		const list = new SinglyLinkedList();
		list.prepend(1);
		list.prepend(2);
		list.prepend(3);
		assert.strictEqual(list.head.data, 3);
		assert.strictEqual(list.tail.data, 1);
		assert.strictEqual(list.length, 3);
	})

})

describe("DoublyLinkedList", () => {

	test("append", () => {
		const list = new DoublyLinkedList();
		list.append(1);
		list.append(2);
		list.append(3);
		assert.strictEqual(list.head.data, 1);
		assert.strictEqual(list.tail.data, 3);
		assert.strictEqual(list.length, 3);
	})

	test("prepend", () => {
		const list = new DoublyLinkedList();
		list.prepend(1);
		list.prepend(2);
		list.prepend(3);
		assert.strictEqual(list.head.data, 3);
		assert.strictEqual(list.tail.data, 1);
		assert.strictEqual(list.length, 3);
	})

})

