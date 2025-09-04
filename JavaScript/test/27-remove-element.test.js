import { expect } from "chai";
import { describe, test } from "mocha";
import { removeElement } from "../src/27-remove-element.js";

describe("Remove Element", () => {
  test("Case 1", () => {
    const nums = [3, 2, 2, 3];

    expect(removeElement(nums, 3)).to.eq(2);
  });

  test("Case 2", () => {
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).to.eq(5);
  });
});
