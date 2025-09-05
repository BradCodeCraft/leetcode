import { expect } from "chai";
import { describe, test } from "mocha";
import { removeDuplicates } from "../src/26-remove-duplicates-from-sorted-array.js";

describe("Remove Duplicates from Sorted Array", () => {
  test("Case 1", () => {
    expect(removeDuplicates([1, 1, 2])).to.eq(2);
  });

  test("Case 2", () => {
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).to.eq(5);
  });
});
