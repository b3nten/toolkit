function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === '[object Object]'
}

export function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false
  }
  const ctor = o.constructor
  if (ctor === undefined) {
    return true
  }
  const prot = ctor.prototype
  if (!hasObjectPrototype(prot)) {
    return false
  }
  if (!prot.hasOwnProperty('isPrototypeOf')) {
    return false
  }
  if (Object.getPrototypeOf(o) !== Object.prototype) {
    return false
  }
  return true
}

/**
 * Hashes a key to a string, throwing an error if the key contains unserializable values.
 * @param {*} key 
 * @returns {string}
 * @throws {TypeError} If the key contains unserializable values
 */
export function hashKey(key) {
  return JSON.stringify(key, (_, val) =>
    isPlainObject(val)
      ? Object.keys(val)
          .sort()
          .reduce((result, key) => {
            result[key] = val[key]
            return result
          }, {})
      : val,
  )
}

/**
 * Hashes a key to a string, or returns the key if it cannot be hashed.
 * @template T
 * @param {T} key
 * @returns {string | T}
 */
export function safeHashKey(k) {
	try {
		return hashKey(k)
	} catch {
		return k
	}
}