import { describe, test } from "mocha";
import { expect } from "chai";
import {
  inorderTraversal,
  TreeNode,
} from "../src/94-binary-tree-inorder-traversal.js";

describe("Binary Tree Inorder Traversal", () => {
  test("Case 1", () => {
    expect(
      inorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3)))),
    ).to.deep.eq([1, 3, 2]);
  });

  test("Case 2", () => {
    expect(
      inorderTraversal(
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
    ).to.deep.eq([4, 2, 6, 5, 7, 1, 3, 9, 8]);
  });

  test("Case 3", () => {
    expect(inorderTraversal()).to.deep.eq([]);
  });

  test("Case 4", () => {
    expect(inorderTraversal(new TreeNode(1))).to.deep.eq([1]);
  });
});
