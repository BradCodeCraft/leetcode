import { expect } from "chai";
import { describe, test } from "mocha";
import { spiralOrder } from "../src/54-spiral-matrix.js";

describe("Spiral Matrix", () => {
  test("Case 1", () => {
    expect(
      spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).to.deep.eq([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  test("Case 2", () => {
    expect(
      spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ]),
    ).to.deep.eq([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
  });
});
