package dev.find_duplicate_subtrees;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

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
  private String postorder(TreeNode node, Map<String, Integer> map,
                           List<TreeNode> res) {
    if (node == null)
      return "#";

    String serial = node.val + "," + postorder(node.left, map, res) + "," +
                    postorder(node.right, map, res);
    map.put(serial, map.getOrDefault(serial, 0) + 1);
    if (map.get(serial) == 2)
      res.add(node);
    return serial;
  }

  public List<TreeNode> findDuplicateSubtrees(TreeNode root) {
    List<TreeNode> nodes = new LinkedList<>();
    this.postorder(root, new HashMap<>(), nodes);
    return nodes;
  }
}
