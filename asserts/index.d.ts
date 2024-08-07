export declare class AssertionError extends Error {}

export declare class DebugAssertionError extends AssertionError {}

export declare function ASSERT(condition: any, message?: string | Error | Function ): asserts condition;

export declare module ASSERT {
	let enabled: boolean;
	function isBoolean(value: any, message: string | Error | Function): asserts value is boolean;
	function isTruthy<T>(value: T, message: string | Error | Function): asserts value is NonNullable<T>;
	function isTrue(value: any, message: string | Error | Function): asserts value is true;
	function isFalsy(value: any, message: string | Error | Function): asserts value is false | 0 | "" | null | undefined | void;
	function isFalse(value: any, message: string | Error | Function): asserts value is false;
	function isNullish(value: any, message: string | Error | Function): asserts value is null | undefined;
	function isNull(value: any, message: string | Error | Function): asserts value is null;
	function isUndefined(value: any, message: string | Error | Function): asserts value is undefined;
	function isString(value: any, message: string | Error | Function): asserts value is string;
	function isNumber(value: any, message: string | Error | Function): asserts value is number;
	function isInteger(value: any, message: string | Error | Function): asserts value is number;
	function isFloat(value: any, message: string | Error | Function): asserts value is number;
	function isBigInt(value: any, message: string | Error | Function): asserts value is bigint;
	function isSymbol(value: any, message: string | Error | Function): asserts value is symbol;
	function isFunction(value: any, message: string | Error | Function): asserts value is Function;
	function isObject(value: any, message: string | Error | Function): asserts value is object;
	function hasKeys<K extends string | symbol>(value: any, keys: K[], message: string | Error | Function): asserts value is { readonly [Key in K]: unknown };
	function isArray(value: any, message: string | Error | Function): asserts value is any[];
	function isDate(value: any, message: string | Error | Function): asserts value is Date;
	function isError(value: any, message: string | Error | Function): asserts value is Error;
	function isRegExp(value: any, message: string | Error | Function): asserts value is RegExp;
	function isPromise(value: any, message: string | Error | Function): asserts value is Promise<any>;
	function isSafari(message: string | Error | Function): asserts;
	function isFirefox(message: string | Error | Function): asserts;
	function isChrome(message: string | Error | Function): asserts;
	function isWindows(message: string | Error | Function): asserts;
	function isMacOS(message: string | Error | Function): asserts;
	function isLinux(message: string | Error | Function): asserts;
	function isIOS(message: string | Error | Function): asserts;
	function isAndroid(message: string | Error | Function): asserts;
	function isBrowser(message: string | Error | Function): asserts;
	function isNode(message: string | Error | Function): asserts;
	function isDev(message: string | Error | Function): asserts;
}

export declare function DEBUG_ASSERT(condition: any, message?: string | Error | Function ): asserts condition;

export declare module DEBUG_ASSERT {
	let enabled: boolean;
	function isBoolean(value: any, message: string | Error | Function): asserts value is boolean;
	function isTruthy<T>(value: T, message: string | Error | Function): asserts value is NonNullable<T>;
	function isTrue(value: any, message: string | Error | Function): asserts value is true;
	function isFalsy(value: any, message: string | Error | Function): asserts value is false | 0 | "" | null | undefined | void;
	function isFalse(value: any, message: string | Error | Function): asserts value is false;
	function isNullish(value: any, message: string | Error | Function): asserts value is null | undefined;
	function isNull(value: any, message: string | Error | Function): asserts value is null;
	function isUndefined(value: any, message: string | Error | Function): asserts value is undefined;
	function isString(value: any, message: string | Error | Function): asserts value is string;
	function isNumber(value: any, message: string | Error | Function): asserts value is number;
	function isInteger(value: any, message: string | Error | Function): asserts value is number;
	function isFloat(value: any, message: string | Error | Function): asserts value is number;
	function isBigInt(value: any, message: string | Error | Function): asserts value is bigint;
	function isSymbol(value: any, message: string | Error | Function): asserts value is symbol;
	function isFunction(value: any, message: string | Error | Function): asserts value is Function;
	function isObject(value: any, message: string | Error | Function): asserts value is object;
	function hasKeys<K extends string | symbol>(value: any, keys: K[], message: string | Error | Function): asserts value is { readonly [Key in K]: unknown };
	function isArray(value: any, message: string | Error | Function): asserts value is any[];
	function isDate(value: any, message: string | Error | Function): asserts value is Date;
	function isError(value: any, message: string | Error | Function): asserts value is Error;
	function isRegExp(value: any, message: string | Error | Function): asserts value is RegExp;
	function isPromise(value: any, message: string | Error | Function): asserts value is Promise<any>;
	function isSafari(message: string | Error | Function): asserts;
	function isFirefox(message: string | Error | Function): asserts;
	function isChrome(message: string | Error | Function): asserts;
	function isWindows(message: string | Error | Function): asserts;
	function isMacOS(message: string | Error | Function): asserts;
	function isLinux(message: string | Error | Function): asserts;
	function isIOS(message: string | Error | Function): asserts;
	function isAndroid(message: string | Error | Function): asserts;
	function isBrowser(message: string | Error | Function): asserts;
	function isNode(message: string | Error | Function): asserts;
	function isDev(message: string | Error | Function): asserts;
}

export function isBoolean(value: any): value is boolean;

export function isTruthy<T>(value: T): value is NonNullable<T>;

export function isTrue(value: any): value is true;

export function isFalsy(value: any): value is false | 0 | "" | null | undefined | void;

export function isFalse(value: any): value is false;

export function isNullish(value: any): value is null | undefined;

export function isNull(value: any): value is null;

export function isUndefined(value: any): value is undefined;

export function isString(value: any): value is string;

export function isNumber(value: any): value is number;

export function isInteger(value: any): value is number;

export function isFloat(value: any): value is number;

export function isBigInt(value: any): value is bigint;

export function isSymbol(value: any): value is symbol;

export function isFunction(value: any): value is Function;

export function isObject(value: any): value is object;

export function hasKeys<K extends string | symbol>(value: any, keys: K[]): value is { readonly [Key in K]: unknown };

export function isArray(value: any): value is any[];

export function isDate(value: any): value is Date;

export function isError(value: any): value is Error;

export function isRegExp(value: any): value is RegExp;

export function isPromise(value: any): value is Promise<any>;

export function isSafari(): boolean;

export function isFirefox(): boolean;

export function isChrome(): boolean;

export function isWindows(): boolean;

export function isMacOS(): boolean;

export function isLinux(): boolean;

export function isIOS(): boolean;

export function isAndroid(): boolean;

export function isBrowser(): boolean;

export function isNode(): boolean;

export function isDev(): boolean;