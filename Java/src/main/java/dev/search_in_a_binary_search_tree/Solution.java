package dev.search_in_a_binary_search_tree;

class TreeNode {
  int val;
  TreeNode left;
  TreeNode right;

  TreeNode() {}

  TreeNode(int val) { this.val = val; }

  TreeNode(int val, TreeNode left, TreeNode right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Solution
 */
public class Solution {
  public TreeNode searchBST(TreeNode root, int val) {
    if (root == null) {
      return null;
    }

    if (root.val == val) {
      return root;
    } else if (root.val < val) {
      return this.searchBST(root.right, val);
    } else if (root.val > val) {
      return this.searchBST(root.left, val);
    }

    return null;
  }
}
