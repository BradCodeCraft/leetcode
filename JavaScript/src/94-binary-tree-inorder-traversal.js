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

function inorderTraversalHelper(root, arr) {
  if (!root) return;
  if (root.left) inorderTraversalHelper(root.left, arr);
  arr.push(root.val);
  if (root.right) inorderTraversalHelper(root.right, arr);
}

/**
 * @param {TreeNode} root
 * @returns {number[]}
 */
function inorderTraversal(root) {
  let result = [];

  inorderTraversalHelper(root, result);

  return result;
}

export { TreeNode, inorderTraversal };
