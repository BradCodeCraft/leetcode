import { describe, test } from "mocha";
import { isAnagram } from "../src/242-valid-anagram.js";
import { expect } from "chai";

describe("Valid Anagram", () => {
  test("Case 1", () => {
    expect(isAnagram("anagram", "nagaram")).to.be.true;
  });

  test("Case 2", () => {
    expect(isAnagram("rat", "car")).to.be.false;
  });
});
