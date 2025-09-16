import { describe, test } from "mocha";
import { expect } from "chai";
import { TreeNode, isSymmetric } from "../src/101-symmetric-tree.js";

describe("Symmetric Tree", () => {
  test("Case 1", () => {
    expect(
      isSymmetric(
        new TreeNode(
          1,
          new TreeNode(2, new TreeNode(3), new TreeNode(4)),
          new TreeNode(2, new TreeNode(4), new TreeNode(3)),
        ),
      ),
    ).to.be.true;
  });

  test("Case 2", () => {
    expect(
      isSymmetric(
        new TreeNode(
          1,
          new TreeNode(2, null, new TreeNode(3)),
          new TreeNode(2, null, new TreeNode(3)),
        ),
      ),
    ).to.be.false;
  });

  test("Failed case", () => {
    expect(isSymmetric(new TreeNode(1, new TreeNode(0)))).to.be.false;
  });
});
