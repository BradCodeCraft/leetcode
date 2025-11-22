import { expect } from "chai";
import { describe, it } from "mocha";
import { majorityElement } from "../src/169-majority-element.js";

describe("169. Majority Element", () => {
  it("Case 1", () => {
    expect(majorityElement([3, 2, 3])).to.eq(3);
  });

  it("Case 2", () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).to.eq(2);
  });

  it("Case 3", () => {
    expect(majorityElement([1])).to.eq(1);
  });
});
