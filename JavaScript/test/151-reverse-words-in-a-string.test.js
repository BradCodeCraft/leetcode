import { expect } from "chai";
import { describe, test } from "mocha";
import { reverseWords } from "../src/151-reverse-words-in-a-string.js";

describe("Reverse Words in a String", () => {
  test("Case 1", () => {
    expect(reverseWords("the sky is blue")).to.eq("blue is sky the");
  });

  test("Case 2", () => {
    expect(reverseWords("  hello world  ")).to.eq("world hello");
  });

  test("Case 3", () => {
    expect(reverseWords("a good   example")).to.eq("example good a");
  });
});
