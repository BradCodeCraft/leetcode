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
 * @param {TreeNode} left
 * @param {TreeNode} right
 * @returns {boolean}
 */
function isSymmetricHelper(left, right) {
  if (!left && !right) return true;
  if (!left || !right || left.val != right.val) return false;
  return (
    isSymmetricHelper(left.left, right.right) &&
    isSymmetricHelper(right.left, left.right)
  );
}

/**
 * @param {TreeNode} root
 * @returns {boolean}
 */
function isSymmetric(root) {
  return isSymmetricHelper(root.left, root.right);
}

export { TreeNode, isSymmetric };
