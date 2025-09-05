import { expect } from "chai";
import { describe, test } from "mocha";
import { moveZeroes } from "../src/283-move-zeroes.js";

describe("Move Zeroes", () => {
  test("Case 1", () => {
    const nums = [0, 1, 0, 3, 12];
    moveZeroes(nums);
    expect(nums).to.deep.eq([1, 3, 12, 0, 0]);
  });

  test("Case 2", () => {
    const nums = [0];
    moveZeroes(nums);
    expect(nums).to.deep.eq([0]);
  });

  test("Failed", () => {
    let nums = [1, 0];
    moveZeroes(nums);
    expect(nums).to.deep.eq([1, 0]);

    nums = [2, 1];
    moveZeroes(nums);
    expect(nums).to.deep.eq([2, 1]);
  });
});
