import { expect } from "chai";
import { describe, test } from "mocha";
import { topKFrequent } from "../src/347-top-k-frequent-elements.js";

describe("Top K Frequent Elements", () => {
  test("Case One", () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).to.deep.eq([1, 2]);
  });
  test("Case Two", () => {
    expect(topKFrequent([1], 1)).to.deep.eq([1]);
  });
  test("Case Three", () => {
    expect(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2)).to.deep.eq([1, 2]);
  });
});
