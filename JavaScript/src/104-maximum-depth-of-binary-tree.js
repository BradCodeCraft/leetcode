class TreeNode {
  /**
   * @param {number | undefined} val
   * @param {TreeNode} left
   * @param {TreeNode} right
   */
  constructor(val, left, right) {
    /** @type {number}*/
    this.val = val === undefined ? 0 : val;
    /** @type {TreeNode | null}*/
    this.left = left === undefined ? null : left;
    /** @type {TreeNode | null}*/
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {TreeNode} root
 * @returns {number}
 */
function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

export { TreeNode, maxDepth };
