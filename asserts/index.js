export function ASSERT(condition, message) {
  if (!condition) {
	if(typeof message === 'string') {
		throw new Error(message);
	} else if (typeof message === 'function') {
		message()
	} else if (message instanceof Error) {
		throw message;
	}
  }
}

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