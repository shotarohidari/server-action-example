import { isTimeStamp } from "@/app/util";
import assert from "node:assert";
import test from "node:test";

test("タイムスタンプかどうかチェックできる",() => {
    const value = "2024-05-11 12:43";
    const result = isTimeStamp(value);
    const expected = true;
    assert.strictEqual(result,expected);
});
test("タイムスタンプじゃないものはバツ",() => {
    const value = "";
    const result = isTimeStamp(value);
    const expected = false;
    assert.strictEqual(result,expected);
});