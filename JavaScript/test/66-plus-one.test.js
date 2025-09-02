import { expect } from "chai";
import { describe, test } from "mocha";
import { plusOne } from "../src/66-plus-one.js";

describe("Plus One", () => {
  test("Case 1", () => {
    expect(plusOne([1, 2, 3])).to.deep.eq([1, 2, 4]);
  });

  test("Case 2", () => {
    expect(plusOne([4, 3, 2, 1])).to.deep.eq([4, 3, 2, 2]);
  });

  test("Case 3", () => {
    expect(plusOne([9])).to.deep.eq([1, 0]);
  });

  test("Failed", () => {
    expect(plusOne([9, 9])).to.deep.eq([1, 0, 0]);
  });
});
