import { expect } from "chai";
import { describe, test } from "mocha";
import { reverseWords } from "../src/557-reverse-words-in-a-string-iii.js";

describe("Reverse Words in a String III", () => {
  test("Case 1", () => {
    expect(reverseWords("Let's take LeetCode contest")).to.eq(
      "s'teL ekat edoCteeL tsetnoc",
    );
  });

  test("Case 2", () => {
    expect(reverseWords("Mr Ding")).to.eq("rM gniD");
  });
});
