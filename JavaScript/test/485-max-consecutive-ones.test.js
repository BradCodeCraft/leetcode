import { expect } from "chai";
import { describe, test } from "mocha";
import { findMaxConsecutiveOnes } from "../src/485-max-consecutive-ones.js";

describe("Max Consecutive Ones", () => {
  test("Case 1", () => {
    expect(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])).to.eq(3);
  });

  test("Case 2", () => {
    expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])).to.eq(2);
  });
});
