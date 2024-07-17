/**
 * @class Queue
 * @template T
 */
export class Queue {
	constructor() {
		this.queue = [];
	}

	/**
	 * Enqueues the value to the queue
	 * @param {T} value
	 * @returns {void}
	 */
	enqueue(value) {
		this.queue.push(value);
	}

	/**
	 * Dequeues the value from the queue
	 * @returns {T | undefined}
	 * */
	dequeue() {
		return this.queue.shift();
	}

	/**
	 * Peeks the value from the queue without removing it
	 * @returns {T | undefined}
	 * */
	peek() {
		return this.queue[0];
	}

	/**
	 * Checks if the queue is empty
	 * @returns {boolean}
	 * */
	isEmpty() {
		return this.queue.length === 0;
	}

	/**
	 * Returns the size of the queue
	 * @returns {number}
	 * */
	size() {
		return this.queue.length;
	}

	/**
	 * Clears the queue
	 * @returns {void}
	 * */
	clear() {
		this.queue.length = 0;
	}
}