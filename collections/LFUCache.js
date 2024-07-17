
/**
 * @class LFUCache
 * @description Least Frequently Used Cache - A cache that removes the least frequently used items first
 * @param {number} capacity - The capacity of the cache
 * @template T - The type of the value stored in the cache
 */
export class LFUCache {

	/**
	 * Value cache
	 * @type {Map<any, T>}
	 */
	cache = new Map();
	/**
	 * Frequency of cache access
	 * @type {Map<any, number>}
	 */
	frequency = new Map();
	/**
	 * Capacity of the cache
	 */
	capacity = 0;

	hashFunction;

	constructor({ capacity = 10, hashFunction }) {
		if(capacity <= 0) {
			throw new Error('Capacity must be greater than 0');
		}
		this.hashFunction = hashFunction;
		this.capacity = capacity;
	}

	/**
	 * Get the value from the cache
	 * @param {any} key - The key to get the value for
	 * @returns {T | undefined} - The value if it exists, otherwise undefined
	 * */
	get(key){
		const k = this.hashFunction ? this.hashFunction(key) : key;
		if(this.cache.has(k)){
			this.frequency.set(k, this.frequency.get(k) + 1);
			return this.cache.get(k);
		}
		return undefined;
	}

	/**
	 * Set the value in the cache
	 * @param {any} key - The key to set the value for
	 * @param {T} value - The value to set
	 * */
	set(key, value){
		const k = this.hashFunction ? this.hashFunction(key) : key;
		if(this.cache.size >= this.capacity){
			console.log('Removing least frequently used item');
			let min = Infinity;
			let minKey = null;
			for(let [key, value] of this.frequency){
				if(value < min){
					min = value;
					minKey = key;
				}
			}
			this.cache.delete(minKey);
			this.frequency.delete(minKey);
		}
		this.cache.set(k, value);
		this.frequency.set(k, 1);
	}

	/**
	 * Remove the value from the cache
	 * @param {any} key - The key to remove the value for
	 * */
	remove(key){
		const k = this.hashFunction ? this.hashFunction(key) : key
		this.cache.delete(k);
		this.frequency.delete(k);
	}

	/**
	 * Clear the cache
	 * */
	clear(){
		this.cache.clear();
		this.frequency.clear();
	}

	/**
	 * Get the size of the cache
	 * @returns {number} - The size of the cache
	 * */
	get size(){
		return this.cache.size;
	}
}