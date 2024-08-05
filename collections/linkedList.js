class SinglyLinkedListNode {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

export class SinglyLinkedList {
	#head = null;

	#tail = null;

	#length = 0;

	get length() {
		return this.#length;
	}

	get head() {
		return this.#head;
	}

	get tail() {
		return this.#tail;
	}

	/**
	 * Add a node to the end of the list
	 * @param {any} data - The data to add to the list
	 */
	append(data) {
		const newNode = new SinglyLinkedListNode(data);

		if (!this.#head) {
			this.#head = newNode;
			this.#tail = newNode;
		} else {
			this.#tail.next = newNode;
			this.#tail = newNode;
		}

		this.#length++;
	}

	/**
	 * Add a node to the beginning of the list
	 * @param {any} data - The data to add to the list
	 */

	prepend(data) {
		const newNode = new SinglyLinkedListNode(data, this.#head);
		this.#head = newNode;

		if (!this.#tail) {
			this.#tail = newNode;
		}

		this.#length++;
	}

	/**
	 * Insert a node at a specific index
	 * @param {number} index - The index to insert the node at
	 * @param {any} data - The data to insert
	 */
	insert(index, data) {
		if (index >= this.#length) {
			this.append(data);
		} else if (index === 0) {
			this.prepend(data);
		} else {
			const newNode = new SinglyLinkedListNode(data);
			let current = this.#head;
			let i = 0;

			while (i < index - 1) {
				current = current.next;
				i++;
			}

			newNode.next = current.next;
			current.next = newNode;
			this.#length++;
		}
	}

	/**
	 * Remove a node from the list
	 * @param {any} data - The data to remove from the list
	 */
	remove(data) {
		let current = this.#head;

		if (current.data === data) {
			this.#head = current.next;
			this.#length--;
			return;
		}

		while (current.next) {
			if (current.next.data === data) {
				current.next = current.next.next;
				this.#length--;
				return;
			}

			current = current.next;
		}
	}

	/**
	 * Remove a node from a specific index
	 * @param {number} index - The index to remove the node from
	 */
	removeAt(index) {
		if (index === 0) {
			this.#head = this.#head.next;
			this.#length--;
			return;
		}

		let current = this.#head;
		let i = 0;

		while (i < index - 1) {
			current = current.next;
			i++;
		}

		current.next = current.next.next;
		this.#length--;
	}

	/**
	 * Find a node in the list
	 * @param {any} data - The data to find in the list
	 * @returns {SinglyLinkedListNode} - The node that was found
	 */
	find(data) {
		let current = this.#head;

		while (current) {
			if (current.data === data) {
				return current;
			}

			current = current.next;
		}

		return null;
	}

	/**
	 * Convert the list to an array
	 * @returns {Array} - The array representation of the list
	 */
	toArray() {
		const nodes = [];
		let current = this.#head;

		while (current) {
			nodes.push(current);
			current = current.next;
		}

		return nodes;
	}

	/**
	 * Reverse the list
	 */

	reverse() {
		let current = this.#head;
		let prev = null;
		let next = null;

		while (current) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}

		this.#tail = this.#head;
		this.#head = prev;
	}

	/**
	 * Clear the list
	 */

	clear() {
		this.#head = null;
		this.#tail = null;
		this.#length = 0;
	}

	/**
	 * Get the node at a specific index
	 * @param {number} index - The index to get the node at
	 * @returns {SinglyLinkedListNode} - The node at the index
	 */
	getAt(index) {
		let current = this.#head;
		let i = 0;

		while (i < index) {
			current = current.next;
			i++;
		}

		return current;
	}

	*[Symbol.iterator]() {
		let current = this.#head;

		while (current) {
			yield current;
			current = current.next;
		}
	}

}

class DoublyLinkedListNode {
	constructor(data, next = null, prev = null) {
		this.data = data;
		this.next = next;
		this.prev = prev;
	}
}

export class DoublyLinkedList {

	#head = null;

	#tail = null;

	#length = 0;

	get length() {
		return this.#length;
	}

	get head() {
		return this.#head;
	}

	get tail() {
		return this.#tail;
	}

	/**
	 * Add a node to the end of the list
	 * @param {any} data - The data to add to the list
	 */
	append(data) {
		const newNode = new DoublyLinkedListNode(data);

		if (!this.#head) {
			this.#head = newNode;
			this.#tail = newNode;
		} else {
			this.#tail.next = newNode;
			newNode.prev = this.#tail;
			this.#tail = newNode;
		}

		this.#length++;
	}

	/**
	 * Add a node to the beginning of the list
	 * @param {any} data - The data to add to the list
	 */
	prepend(data) {
		const newNode = new DoublyLinkedListNode(data, this.#head);
		this.#head = newNode;

		if (!this.#tail) {
			this.#tail = newNode;
		}

		this.#length++;
	}

	/**
	 * Insert a node at a specific index
	 * @param {number} index - The index to insert the node at
	 * @param {any} data - The data to insert
	 */
	insert(index, data) {
		if (index >= this.#length) {
			this.append(data);
		} else if (index === 0) {
			this.prepend(data);
		} else {
			const newNode = new DoublyLinkedListNode(data);
			let current = this.#head;
			let i = 0;

			while (i < index - 1) {
				current = current.next;
				i++;
			}

			newNode.next = current.next;
			newNode.prev = current;
			current.next = newNode;
			newNode.next.prev = newNode;
			this.#length++;
		}
	}

	/**
	 * Remove a node from the list
	 * @param {any} data - The data to remove from the list
	 */
	remove(data) {
		let current = this.#head;

		if (current.data === data) {
			this.#head = current.next;
			this.#head.prev = null;
			this.#length--;
			return;
		}

		while (current.next) {
			if (current.next.data === data) {
				current.next = current.next.next;
				current.next.prev = current;
				this.#length--;
				return;
			}

			current = current.next;
		}
	}

	/**
	 * Remove a node from a specific index
	 * @param {number} index - The index to remove the node from
	 */
	removeAt(index) {
		if (index === 0) {
			this.#head = this.#head.next;
			this.#head.prev = null;
			this.#length--;
			return;
		}

		let current = this.#head;
		let i = 0;

		while (i < index - 1) {
			current = current.next;
			i++;
		}

		current.next = current.next.next;
		current.next.prev = current;
		this.#length--;
	}

	/**
	 * Find a node in the list
	 * @param {any} data - The data to find in the list
	 * @returns {DoublyLinkedListNode} - The node that was found
	 */
	find(data) {
		let current = this.#head;

		while (current) {
			if (current.data === data) {
				return current;
			}

			current = current.next;
		}

		return null;
	}

	/**
	 * Convert the list to an array
	 * @returns {Array} - The array representation of the list
	 */
	toArray() {
		const nodes = [];
		let current = this.#head;

		while (current) {
			nodes.push(current);
			current = current.next;
		}

		return nodes;
	}

	/**
	 * Reverse the list
	 */
	reverse() {
		let current = this.#head;
		let temp = null;

		while (current) {
			temp = current.prev;
			current.prev = current.next;
			current.next = temp;
			current = current.prev;
		}

		if (temp) {
			this.#head = temp.prev;
		}
	}

	/**
	 * Clear the list
	 */
	clear() {
		this.#head = null;
		this.#tail = null;
		this.#length = 0;
	}

	/**
	 * Get the node at a specific index
	 * @param {number} index - The index to get the node at
	 * @returns {DoublyLinkedListNode} - The node at the index
	 */
	getAt(index) {
		let current = this.#head;
		let i = 0;

		while (i < index) {
			current = current.next;
			i++;
		}

		return current;
	}

	*[Symbol.iterator]() {
		let current = this.#head;

		while (current) {
			yield current;
			current = current.next;
		}
	}

}