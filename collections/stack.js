

export class Stack {

	constructor() {
		this.stack = [];
	}

	/**
	 * Pushes the value to the stack
	 * @param {T} value
	 * @returns {void}
	 */
	push(value) {
		this.stack.push(value);
	}

	/**
	 * Pops the value from the stack
	 * @returns {T | undefined}
	 * */
	pop() {
		return this.stack.pop();
	}

	/**
	 * Peeks the value from the stack
	 * @returns {T | undefined}
	 * */
	peek() {
		return this.stack[this.stack.length - 1];
	}

	/**
	 * Checks if the stack is empty
	 * @returns {boolean}
	 * */
	isEmpty() {
		return this.stack.length === 0;
	}

	/**
	 * Returns the size of the stack
	 * @returns {number}
	 * */
	size() {
		return this.stack.length;
	}

	/**
	 * Clears the stack
	 * @returns {void}
	 * */
	clear() {
		this.stack.length = 0;
	}

	/**
	 * Returns an iterator for the stack
	 * @returns {IterableIterator<T>}
	 * */
	*[Symbol.iterator]() {
		for (let i = this.stack.length - 1; i >= 0; i--) {
			yield this.stack[i];
		}
	}

}