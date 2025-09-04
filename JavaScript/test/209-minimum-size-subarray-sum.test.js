import { expect } from "chai";
import { describe, test } from "mocha";
import { minSubArrayLen } from "../src/209-minimum-size-subarray-sum.js";

describe("Minimum Size Subarray Sum", () => {
  test("Case 1", () => {
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).to.eq(2);
  });
  test("Case 2", () => {
    expect(minSubArrayLen(4, [1, 4, 4])).to.eq(1);
  });
  test("Case 3", () => {
    expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).to.eq(0);
  });
  test("Failed", () => {
    expect(minSubArrayLen(11, [1, 2, 3, 4, 5])).to.eq(3);
    expect(minSubArrayLen(7, [1, 1, 1, 1, 7])).to.eq(1);
  });
});
