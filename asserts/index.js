export class AssertionError extends Error {
	constructor(message) {
		super(message);
		this.name = 'AssertionError';
		this.stack = this.stack.split('\n').filter((line) => !line.includes('at ASSERT')).join('\n');
	}
}

export class DebugAssertionError extends AssertionError {
	constructor(message) {
		super(message);
		this.name = 'DebugAssertionError';
		this.stack = this.stack.split('\n').filter((line) => !line.includes('at DEBUG_ASSERT')).join('\n');
	}
}

export function ASSERT(condition, message) {
	if(!ASSERT.enabled) return;
	if (!condition) {
		if(typeof message === 'string') {
			throw new AssertionError(message);
		} else if (typeof message === 'function') {
			message()
		} else if (message instanceof Error) {
			throw message;
		} else {
			throw new AssertionError('Assertion failed');
		}
	}
}

ASSERT.enabled = true;

export function DEBUG_ASSERT(condition, message) {
	if(!DEBUG_ASSERT.enabled) return;
	if (!condition) {
		if(typeof message === 'string') {
			throw new DebugAssertionError(message);
		} else if (typeof message === 'function') {
			message()
		} else if (message instanceof Error) {
			throw message;
		} else {
			throw new DebugAssertionError('Assertion failed');
		}
	}
}

DEBUG_ASSERT.enabled = true;

export function isBoolean(value) { return typeof value === 'boolean'; }

export function isTrue(value) { return value === true; }

export function isFalse(value) { return value === false; }

export function isTruthy(value) { return !!value; }

export function isFalsy(value) { return !value; }

export function isNull(value) { return value === null; }

export function isUndefined(value) { return value === undefined; }

export function isNullish(value) { return isNull(value) || isUndefined(value); }

export function isString(value) { return typeof value === 'string'; }

export function isNumber(value) { return typeof value === 'number'; }

export function isInteger(value) { return Number.isInteger(value); }

export function isFloat(value) { return Number.isFinite(value) && !Number.isInteger(value); }

export function isBigInt(value) { return typeof value === 'bigint'; }

export function isSymbol(value) { return typeof value === 'symbol'; }

export function isFunction(value) { return typeof value === 'function'; }

export function isObject(value) { return typeof value === 'object' && value !== null; }

export function hasKeys(value, keys) { return isObject(value) && keys.every(key => key in value); }

export function isArray(value) { return Array.isArray(value); }

export function isDate(value) { return value instanceof Date; }

export function isError(value) { return value instanceof Error; }

export function isRegExp(value) { return value instanceof RegExp; }

export function isPromise(value) { return value instanceof Promise; }

export function isSafari() { return /^((?!chrome|android).)*safari/i.test(navigator.userAgent); }

export function isFirefox() { return navigator.userAgent.toLowerCase().indexOf('firefox') > -1; }

export function isChrome() { return /chrome/.test(navigator.userAgent.toLowerCase()); }

export function isWindows() { return /win/.test(navigator.platform); }

export function isMac() { return /mac/.test(navigator.platform); }

export function isLinux() { return /linux/.test(navigator.platform); }

export function isIOS() { return /iPad|iPhone|iPod/.test(navigator.platform); }

export function isAndroid() { return /android/.test(navigator.userAgent.toLowerCase()); }

export function isMobile() { return isIOS() || isAndroid(); }

export function isBrowser() { return typeof window !== 'undefined' && typeof document !== 'undefined'; }

export function isNode() { return typeof process !== 'undefined' && process.versions != null && process.versions.node != null; }

export function isDev() { return process.env.NODE_ENV === 'development'; }

const checks = [
	isBoolean, isTrue, isFalse, isTruthy, isFalsy, isNull, isUndefined, isNullish,
	isString, isNumber, isInteger, isFloat, isBigInt, isSymbol, isFunction, isObject,
	hasKeys, isArray, isDate, isError, isRegExp, isPromise,
	isSafari, isFirefox, isChrome, isWindows, isMac, isLinux, isIOS, isAndroid, isMobile,
	isBrowser, isNode, isDev
]

for(const check of checks){
	ASSERT[check.name] = (value, message) => ASSERT(check(value), message);
	DEBUG_ASSERT[check.name] = (value, message) => DEBUG_ASSERT(check(value), message);
}