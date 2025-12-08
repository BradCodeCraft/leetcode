import { expect } from "chai";
import { describe } from "mocha";
import { countNodes, TreeNode } from "../src/222-count-complete-tree-nodes.js";

describe("Count Complete Tree Nodes", () => {
  it("Case 1", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3, new TreeNode(6)),
    );

    expect(countNodes(root)).to.eq(6);
  });

  it("Case 2", () => {
    expect(countNodes(null)).to.eq(0);
  });

  it("Case 3", () => {
    expect(countNodes(new TreeNode(1))).to.eq(1);
  });
});
