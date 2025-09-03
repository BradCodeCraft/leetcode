import { expect } from "chai";
import { describe, test } from "mocha";
import { generate } from "../src/118-pascals-triangle.js";

describe("Pascal's Triangle", () => {
  test("Case 1", () => {
    expect(generate(5)).to.deep.eq([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ]);
  });

  test("Case 2", () => {
    expect(generate(1)).to.deep.eq([[1]]);
  });
});
