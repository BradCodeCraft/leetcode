import { expect } from "chai";
import { describe, test } from "mocha";
import {
  TreeNode,
  lowestCommonAncestor,
} from "../src/236-lowest-common-ancestor-of-a-binary-tree.js";

describe("Lowest Common Ancestor of a Binary Tree", () => {
  test("Case 1", () => {
    let root = new TreeNode(3);
    root.left = new TreeNode(5);
    root.left.left = new TreeNode(6);
    root.left.right = new TreeNode(2);
    root.left.right.left = new TreeNode(7);
    root.left.right.right = new TreeNode(4);
    root.right = new TreeNode(1);
    root.right.left = new TreeNode(0);
    root.right.right = new TreeNode(8);

    expect(lowestCommonAncestor(root, new TreeNode(5), new TreeNode(1))).to.eq(
      root,
    );
  });

  test("Case 2", () => {
    let root = new TreeNode(3);
    root.left = new TreeNode(5);
    root.left.left = new TreeNode(6);
    root.left.right = new TreeNode(2);
    root.left.right.left = new TreeNode(7);
    root.left.right.right = new TreeNode(4);
    root.right = new TreeNode(1);
    root.right.left = new TreeNode(0);
    root.right.right = new TreeNode(8);

    expect(lowestCommonAncestor(root, new TreeNode(5), new TreeNode(4))).to.eq(
      root.left,
    );
  });

  test("Case 3", () => {
    let root = new TreeNode(1);
    root.left = new TreeNode(2);

    expect(lowestCommonAncestor(root, new TreeNode(1), new TreeNode(2))).to.eq(
      root,
    );
  });
});
