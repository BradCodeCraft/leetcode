import { describe, test } from "mocha";
import { expect } from "chai";
import {
  TreeNode,
  buildTree,
} from "../src/105-construct-binary-tree-from-preorder-and-inorder-traversal.js";

describe("Construct Binary Tree from Preorder and Inorder Traversal", () => {
  test("Case 1", () => {
    expect(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])).to.deep.eq(
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

  test("Failed", () => {
    expect(buildTree([1, 2, 3, 4], [1, 2, 3, 4])).to.deep.eq(
      new TreeNode(
        1,
        null,
        new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4))),
      ),
    );

    expect(buildTree([1, 2, 3], [3, 2, 1])).to.deep.eq(
      new TreeNode(1, new TreeNode(2, new TreeNode(3))),
    );
  });
});
