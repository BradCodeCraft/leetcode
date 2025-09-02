import { expect } from "chai";
import { describe, test } from "mocha";
import { dominantIndex } from "../src/747-largest-number-at-least-twice-of-others.js";

describe("Largest Number At Least Twice of Others", () => {
  test("Case 1", () => {
    expect(dominantIndex([3, 6, 1, 0])).to.eq(1);
  });

  test("Case 2", () => {
    expect(dominantIndex([1, 2, 3, 4])).to.eq(-1);
  });
});
