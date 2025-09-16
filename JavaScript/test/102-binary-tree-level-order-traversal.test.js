import { describe, test } from "mocha";
import { expect } from "chai";
import {
  levelOrder,
  TreeNode,
} from "../src/102-binary-tree-level-order-traversal.js";

describe("Binary Tree Level Order Traversal", () => {
  test("Case 1", () => {
    expect(
      levelOrder(
        new TreeNode(
          3,
          new TreeNode(9),
          new TreeNode(20, new TreeNode(15), new TreeNode(7)),
        ),
      ),
    ).to.deep.eq([[3], [9, 20], [15, 7]]);
  });

  test("Case 2", () => {
    expect(levelOrder(new TreeNode(1))).to.deep.eq([[1]]);
  });

  test("Case 3", () => {
    expect(levelOrder()).to.deep.eq([]);
  });

  test("Failed case", () => {
    expect(
      levelOrder(
        new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4)))),
      ),
    ).to.deep.eq([[1], [2], [3], [4]]);
  });
});
