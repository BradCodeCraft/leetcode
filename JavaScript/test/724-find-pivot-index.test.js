import { expect } from "chai";
import { describe, test } from "mocha";
import { pivotIndex } from "../src/724-find-pivot-index.js";

describe("Find Pivot Index", () => {
  test("Case 1", () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).to.eq(3);
  });

  test("Case 2", () => {
    expect(pivotIndex([1, 2, 3])).to.eq(-1);
  });

  test("Case 3", () => {
    expect(pivotIndex([2, 1, -1])).to.eq(0);
  });

  test("Failed case", () => {
    expect(pivotIndex([-1, -1, -1, -1, -1, 0])).to.eq(2);
  });
});
