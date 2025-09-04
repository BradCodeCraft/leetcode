import { expect } from "chai";
import { describe, test } from "mocha";
import { reverseString } from "../src/344-reverse-string.js";

describe("Reverse String", () => {
  test("Case 1", () => {
    const s = ["h", "e", "l", "l", "o"];
    reverseString(s);
    expect(s).to.deep.eq(["o", "l", "l", "e", "h"]);
  });

  test("Case 2", () => {
    const s = ["H", "a", "n", "n", "a", "h"];
    reverseString(s);
    expect(s).to.deep.eq(["h", "a", "n", "n", "a", "H"]);
  });
});
