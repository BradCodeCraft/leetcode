class TreeNode {
  /**
   * @param {number} val
   */
  constructor(val) {
    this.val = val;
    /** @type {TreeNode} */
    this.left = this.right = null;
  }
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @returns {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  if (!root || root.val === p.val || root.val === q.val) {
    return root;
  }

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left || right;
}

export { TreeNode, lowestCommonAncestor };
