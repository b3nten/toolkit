export declare function run<T>(
	fn: () => T
): T extends Promise<any> ? (Promise<Error | Awaited<T>>) : (Error | T)

export type Result<T> = {
	success: false,
	error: Error,
	value: undefined,
} | {
	success: true,
	error: undefined,
	value: T,
}

export declare function result<T>(
	fn: () => T
): T extends Promise<any> ? (Promise<Result<Awaited<T>>>) : Result<T>

export declare function isResult<T>(input: unknown): input is Result<T>;