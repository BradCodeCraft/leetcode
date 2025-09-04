import { expect } from "chai";
import { describe, test } from "mocha";
import { strStr } from "../src/28-find-the-index-of-the-first-occurrence-in-a-string.js";

describe("Find the Index of the First Occurrence in a String", () => {
  test("Case 1", () => {
    expect(strStr("sadbutsad", "sad")).to.eq(0);
  });

  test("Case 2", () => {
    expect(strStr("leetcode", "leeto")).to.eq(-1);
  });
});
