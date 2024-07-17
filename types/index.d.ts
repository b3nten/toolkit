export type Maybe<T> = T | undefined | null | void

export type MaybeAsync<T> = Maybe<T> | Promise<Maybe<T>>
 
export type Result<T> = T | Error

export type Either<T, U> = T | U

export type Throws<T> = T