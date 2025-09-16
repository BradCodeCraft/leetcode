import { describe, test } from "mocha";
import { expect } from "chai";
import { TreeNode, maxDepth } from "../src/104-maximum-depth-of-binary-tree.js";

describe("Maximum Depth of Binary Tree", () => {
  test("Case 1", () => {
    expect(
      maxDepth(
        new TreeNode(
          3,
          new TreeNode(9),
          new TreeNode(20, new TreeNode(15), new TreeNode(7)),
        ),
      ),
    ).to.eq(3);
  });

  test("Case 2", () => {
    expect(maxDepth(new TreeNode(1, null, new TreeNode(2))));
  });
});
