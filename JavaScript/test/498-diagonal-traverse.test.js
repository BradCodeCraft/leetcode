import { expect } from "chai";
import { describe, test } from "mocha";
import { findDiagonalOrder } from "../src/498-diagonal-traverse.js";

describe("Diagonal Traverse", () => {
  test("Case 1", () => {
    expect(
      findDiagonalOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).to.deep.eq([1, 2, 4, 7, 5, 3, 6, 8, 9]);
  });

  test("Case 2", () => {
    expect(
      findDiagonalOrder([
        [1, 2],
        [3, 4],
      ]),
    ).to.deep.eq([1, 2, 3, 4]);
  });
});
