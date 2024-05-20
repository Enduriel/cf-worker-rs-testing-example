import { describe, test, expect } from "vitest";
import { mf } from "./test/mf";

describe("hello", () => {
	test("hello", async () => {
		let response = await mf.dispatchFetch("localhost:8787");
		expect(response.status).toBe(200);
		expect(response.body).toBe("Hello Axum!");
	});
})
