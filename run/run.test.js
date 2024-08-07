import { test, describe } from "node:test"
import * as assert from "node:assert"
import { run, result } from "./index.js";

const returnsString = () => "string"
const returnsNumberAsync = async () => 123
const throwsError = () => { throw Error("error message") }
const throwsErrorAsync = async () => { await Promise.resolve(); throw Error("error message") }

describe("run", () => {

	test("run", async () => {
		assert.equal(run(returnsString), "string")
		assert.equal(await run(returnsNumberAsync), 123)

		assert.ok(run(throwsError) instanceof Error)
		const err = await run(throwsErrorAsync)
		assert.ok(err instanceof Error)
	})

	test("result", async () => {
		const syncResult = await result(returnsString)
		const asyncResult = await result(returnsNumberAsync)
		const syncErr = await result(throwsError)
		const asyncErr = await result(throwsErrorAsync)

		assert.ok(syncResult.success === true)
		assert.ok(syncResult.error === undefined)
		assert.ok(syncResult.value === "string")
		assert.ok(asyncResult.success === true)
		assert.ok(asyncResult.error === undefined)
		assert.ok(asyncResult.value === 123)

		assert.ok(syncErr.success === false)
		assert.ok(syncErr.error instanceof Error)
		assert.ok(syncErr.value === undefined)
		assert.ok(asyncErr.success === false)
		assert.ok(asyncErr.error instanceof Error)
		assert.ok(asyncErr.value === undefined)
	})

})

