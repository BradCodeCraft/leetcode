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
 * @param {number} targetSum
 * @returns {boolean}
 */
function hasPathSum(root, targetSum) {
  if (!root) return false;

  targetSum -= root.val;

  if (!root.left && !root.right) return targetSum === 0;

  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
}

export { TreeNode, hasPathSum };
