import { expect } from "chai";
import { describe, test } from "mocha";
import { getRow } from "../src/119-pascals-triangle-ii.js";

describe("Pascal's Triangle II", () => {
  test("Case 1", () => {
    expect(getRow(3)).to.deep.eq([1, 3, 3, 1]);
  });
  test("Case 2", () => {
    expect(getRow(0)).to.deep.eq([1]);
  });
  test("Case 3", () => {
    expect(getRow(1)).to.deep.eq([1, 1]);
  });
});
