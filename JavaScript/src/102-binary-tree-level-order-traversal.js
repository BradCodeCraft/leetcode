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
 * @return {number[][]}
 */
function levelOrder(root) {
  if (!root) return [];

  let resultArr = [];
  let queue = [root];
  let numberOfNodesInCurrentLevel = 1;

  while (queue.length !== 0) {
    let nodesInCurrentLevel = [];
    let numberOfNodesInNextLevel = 0;

    while (numberOfNodesInCurrentLevel > 0) {
      const node = queue.pop();

      if (node) {
        if (node.left) {
          queue.unshift(node.left);
          numberOfNodesInNextLevel += 1;
        }
        if (node.right) {
          queue.unshift(node.right);
          numberOfNodesInNextLevel += 1;
        }
      }

      nodesInCurrentLevel.push(node.val);
      numberOfNodesInCurrentLevel -= 1;
    }

    resultArr.push(nodesInCurrentLevel);
    numberOfNodesInCurrentLevel = numberOfNodesInNextLevel;
  }

  return resultArr;
}

export { TreeNode, levelOrder };
