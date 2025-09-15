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
 * @param {number[]} arr
 */
function postorderTraversalHelper(root, arr) {
  if (!root) return;
  if (root.left) postorderTraversalHelper(root.left, arr);
  if (root.right) postorderTraversalHelper(root.right, arr);
  arr.push(root.val);
}

/**
 * @param {TreeNode} root
 * @returns {number[]}
 */
function postorderTraversal(root) {
  let result = [];

  postorderTraversalHelper(root, result);

  return result;
}

export { TreeNode, postorderTraversal };
