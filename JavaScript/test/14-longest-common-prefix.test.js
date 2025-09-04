import { expect } from "chai";
import { describe, test } from "mocha";
import { longestCommonPrefix } from "../src/14-longest-common-prefix.js";

describe("Longest Common Prefix", () => {
  test("Case 1", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).to.eq("fl");
  });

  test("Case 2", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).to.eq("");
  });
});
