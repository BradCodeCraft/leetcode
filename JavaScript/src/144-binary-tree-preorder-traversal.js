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

function preorderTraversalHelper(root, arr) {
  if (!root) return;
  arr.push(root.val);
  if (root.left) preorderTraversalHelper(root.left, arr);
  if (root.right) preorderTraversalHelper(root.right, arr);
}

/**
 * @param {TreeNode} root
 * @returns {number[]}
 */
function preorderTraversal(root) {
  let result = [];

  preorderTraversalHelper(root, result);

  return result;
}

export { TreeNode, preorderTraversal };
