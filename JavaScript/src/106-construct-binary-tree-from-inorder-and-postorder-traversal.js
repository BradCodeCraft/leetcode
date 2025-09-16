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
 * @param {number[]} inorder
 * @param {number} inorderStart
 * @param {number} inorderEnd
 * @param {number[]} postorder
 * @param {number} postorderStart
 * @param {number} postorderEnd
 * @returns {TreeNode}
 */
function buildTreeHelper(
  inorder,
  inorderStart,
  inorderEnd,
  postorder,
  postorderStart,
  postorderEnd,
) {
  if (inorderStart > inorderEnd || postorderStart > postorderEnd) return null;

  const rootVal = postorder[postorderEnd];
  const rootIndex = inorder.indexOf(rootVal);
  const leftSize = rootIndex - inorderStart;
  const rightSize = inorderEnd - rootIndex;

  let root = new TreeNode(rootVal);
  root.left = buildTreeHelper(
    inorder,
    inorderStart,
    rootIndex - 1,
    postorder,
    postorderStart,
    postorderStart + leftSize - 1,
  );
  root.right = buildTreeHelper(
    inorder,
    rootIndex + 1,
    inorderEnd,
    postorder,
    postorderEnd - rightSize,
    postorderEnd - 1,
  );

  return root;
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @returns {TreeNode}
 */
function buildTree(inorder, postorder) {
  return buildTreeHelper(
    inorder,
    0,
    inorder.length - 1,
    postorder,
    0,
    postorder.length - 1,
  );
}

export { TreeNode, buildTree };
