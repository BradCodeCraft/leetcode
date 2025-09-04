import { expect } from "chai";
import { describe, test } from "mocha";
import { rotate } from "../src/189-rotate-array.js";

describe("Rotate Array", () => {
  test("Case 1", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    rotate(nums, 3);
    expect(nums).to.deep.eq([5, 6, 7, 1, 2, 3, 4]);
  });

  test("Case 2", () => {
    const nums = [-1, -100, 3, 99];
    rotate(nums, 2);
    expect(nums).to.deep.eq([3, 99, -1, -100]);
  });
});
