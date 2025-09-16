import { describe, test } from "mocha";
import { expect } from "chai";
import { TreeNode, hasPathSum } from "../src/112-path-sum.js";

describe("Path Sum", () => {
  test("Case 1", () => {
    expect(
      hasPathSum(
        new TreeNode(
          5,
          new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
          new TreeNode(
            8,
            new TreeNode(13),
            new TreeNode(4, null, new TreeNode(1)),
          ),
        ),
        22,
      ),
    ).to.be.true;
  });

  test("Case 2", () => {
    expect(hasPathSum(new TreeNode(1, new TreeNode(2), new TreeNode(3)), 5)).to
      .be.false;
  });

  test("Case 3", () => {
    expect(hasPathSum(null, 0)).to.be.false;
  });
});
