import { DoublyLinkedList } from "./linkedList";

/**
 * @class LFUCache
 * @description Least Frequently Used Cache - A cache that removes the least frequently used items first
 * @param {number} capacity - The capacity of the cache
 * @template T - The type of the value stored in the cache
 */
export class LFUCache {

	#values = new Map;

	#freqencies = new Map;

	#frequencyList = new DoublyLinkedList;

	#capacity;

	/**
	 * @param {number} capacity - The capacity of the cache
	 */
	constructor(capacity) {
		this.#capacity = capacity;
	}


	
}