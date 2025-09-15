import { describe, test } from "mocha";
import { expect } from "chai";
import {
  preorderTraversal,
  TreeNode,
} from "../src/144-binary-tree-preorder-traversal.js";

describe("Binary Tree Preorder Traversal", () => {
  test("Case 1", () => {
    expect(
      preorderTraversal(
        new TreeNode(1, null, new TreeNode(2, new TreeNode(3))),
      ),
    ).to.deep.eq([1, 2, 3]);
  });

  test("Case 2", () => {
    expect(
      preorderTraversal(
        new TreeNode(
          1,
          new TreeNode(
            2,
            new TreeNode(4),
            new TreeNode(5, new TreeNode(6), new TreeNode(7)),
          ),
          new TreeNode(3, null, new TreeNode(8, new TreeNode(9))),
        ),
      ),
    ).to.deep.eq([1, 2, 4, 5, 6, 7, 3, 8, 9]);
  });

  test("Case 3", () => {
    expect(preorderTraversal()).to.deep.eq([]);
  });

  test("Case 4", () => {
    expect(preorderTraversal(new TreeNode(1))).to.deep.eq([1]);
  });
});
