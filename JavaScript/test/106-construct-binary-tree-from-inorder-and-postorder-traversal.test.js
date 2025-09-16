import { describe, test } from "mocha";
import { expect } from "chai";
import {
  TreeNode,
  buildTree,
} from "../src/106-construct-binary-tree-from-inorder-and-postorder-traversal.js";

describe("Construct Binary Tree from Inorder and Postorder Traversal", () => {
  test("Case 1", () => {
    expect(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])).to.deep.eq(
      new TreeNode(
        3,
        new TreeNode(9),
        new TreeNode(20, new TreeNode(15), new TreeNode(7)),
      ),
    );
  });

  test("Case 2", () => {
    expect(buildTree([-1], [-1])).to.deep.eq(new TreeNode(-1));
  });

  test("Case 3", () => {
    expect(
      buildTree([10, 9, 3, 11, 15, 20, 7], [10, 9, 11, 15, 7, 20, 3]),
    ).to.deep.eq(
      new TreeNode(
        3,
        new TreeNode(9, new TreeNode(10)),
        new TreeNode(20, new TreeNode(15, new TreeNode(11)), new TreeNode(7)),
      ),
    );
  });
});
