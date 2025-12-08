class TreeNode {
  /**
    @param {number} val
    @param {TreeNode} left
    @param {TreeNode} right
   */
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
  @param {TreeNode | null} root
  @returns {number}
 */
function countNodes(root) {
  if (!root) return 0;

  return 1 + countNodes(root.left) + countNodes(root.right);
}

export { TreeNode, countNodes };
