import { expect } from "chai";
import { describe, test } from "mocha";
import { isPowerOfTwo } from "../src/231-power-of-two.js";

describe("Power of Two", () => {
  test("Case 1", () => {
    expect(isPowerOfTwo(1)).to.be.true;
  });

  test("Case 2", () => {
    expect(isPowerOfTwo(16)).to.be.true;
  });

  test("Case 3", () => {
    expect(isPowerOfTwo(3)).to.be.false;
  });
});
