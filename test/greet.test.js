import test from "node:test";
import assert from "node:assert/strict";
import { greet } from "../src/greet.js";

test("名前を入れると、その名前で挨拶する", () => {
  assert.equal(greet("佐藤"), "ようこそ、佐藤さん！😊");
});
test("名前が空なら入力を促す", () => {
  assert.equal(greet(""), "名前を入力してください");
});
test("空白だけなら入力を促す", () => {
  assert.equal(greet("   "), "名前を入力してください");
});
