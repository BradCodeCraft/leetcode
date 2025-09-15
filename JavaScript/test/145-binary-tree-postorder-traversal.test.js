import { describe, test } from "mocha";
import { expect } from "chai";
import {
  postorderTraversal,
  TreeNode,
} from "../src/145-binary-tree-postorder-traversal.js";

describe("Binary Tree Inorder Traversal", () => {
  test("Case 1", () => {
    expect(
      postorderTraversal(
        new TreeNode(1, null, new TreeNode(2, new TreeNode(3))),
      ),
    ).to.deep.eq([3, 2, 1]);
  });

  test("Case 2", () => {
    expect(
      postorderTraversal(
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
    ).to.deep.eq([4, 6, 7, 5, 2, 9, 8, 3, 1]);
  });

  test("Case 3", () => {
    expect(postorderTraversal()).to.deep.eq([]);
  });

  test("Case 4", () => {
    expect(postorderTraversal(new TreeNode(1))).to.deep.eq([1]);
  });
});
