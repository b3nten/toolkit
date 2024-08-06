export function ASSERT(condition: any, message?: string | Error | Function): asserts condition;

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

export function hasKeys(value: any, keys: Array<string | symbol>): value is { [key in string | symbol]: any };

export function isArray(value: any): value is any[];

export function isDate(value: any): value is Date;

export function isError(value: any): value is Error;

export function isRegExp(value: any): value is RegExp;

export function isPromise(value: any): value is Promise<any>;