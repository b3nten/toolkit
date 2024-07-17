
/**
 * 
 * @param {(...args: any[]) => any | Promise<any>} func 
 * @param {number} [wait ]
 * @param {boolean} [immediate]
 */
export function debounce(func, wait, immediate) {
	const waitTime = wait || 100;
	let timeout /** @type {number} */ = 0;
	let latestArgs = []
	return function(...args) {
		latestArgs = args;
		
	}
}