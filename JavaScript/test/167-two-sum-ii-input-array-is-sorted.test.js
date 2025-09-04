import { expect } from "chai";
import { describe, test } from "mocha";
import { twoSum } from "../src/167-two-sum-ii-input-array-is-sorted.js";

describe("Two Sum II - Input Array Is Sorted", () => {
  test("Case 1", () => {
    expect(twoSum([2, 7, 11, 15], 9)).to.deep.eq([1, 2]);
  });

  test("Case 2", () => {
    expect(twoSum([2, 3, 4], 6)).to.deep.eq([1, 3]);
  });

  test("Case 3", () => {
    expect(twoSum([-1, 0], -1)).to.deep.eq([1, 2]);
  });
});
