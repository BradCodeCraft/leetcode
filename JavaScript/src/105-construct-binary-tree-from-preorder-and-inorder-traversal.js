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
 * @param {number[]} preorder
 * @param {number} preorderStart
 * @param {number} preorderEnd
 * @param {number[]} inorder
 * @param {number} inorderStart
 * @param {number} inorderEnd
 *
 * @returns {TreeNode}
 */
function buildTreeHelper(
  preorder,
  preorderStart,
  preorderEnd,
  inorder,
  inorderStart,
  inorderEnd,
) {
  if (preorderStart > preorderEnd || inorderStart > inorderEnd) return null;

  const rootVal = preorder[preorderStart++];
  const rootInorderIndex = inorder.indexOf(rootVal);
  const leftSize = rootInorderIndex - inorderStart;
  const rightSize = inorderEnd - rootInorderIndex;
  const root = new TreeNode(rootVal);
  root.left = buildTreeHelper(
    preorder,
    preorderStart,
    preorderEnd - rightSize,
    inorder,
    inorderStart,
    inorderEnd - rightSize - 1,
  );
  root.right = buildTreeHelper(
    preorder,
    preorderStart + leftSize,
    preorderEnd,
    inorder,
    inorderStart + leftSize + 1,
    inorderEnd,
  );

  return root;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 *
 * @returns {TreeNode}
 */
function buildTree(preorder, inorder) {
  return buildTreeHelper(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1,
  );
}

export { TreeNode, buildTree };
