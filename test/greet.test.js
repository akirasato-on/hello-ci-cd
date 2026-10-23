import test from "node:test";
import assert from "node:assert/strict";
import { greet } from "../src/greet.js";

test("名前を入れると、その名前で挨拶する", () => {
  assert.equal(greet("佐藤"), "こんにちは、佐藤さん！");
});