class _Node {
  /**
   * @param {number | undefined} val
   * @param {_Node} left
   * @param {_Node} right
   */
  constructor(val, left, right, next) {
    /** @type {number}*/
    this.val = val === undefined ? 0 : val;
    /** @type {_Node | null}*/
    this.left = left === undefined ? null : left;
    /** @type {_Node | null}*/
    this.right = right === undefined ? null : right;
    /** @type {_Node | null}*/
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {_Node} root
 *
 * @returns {_Node}
 */
function connect(root) {
  if (!root) return null;

  let queue = [root];
  let numOfNodesInLevel = 1;

  while (queue.length > 0) {
    let previousNode = null;
    let numOfNodesInNextLevel = 0;

    for (let i = 0; i < numOfNodesInLevel; i += 1) {
      const currentNode = queue.pop();
      if (currentNode) {
        currentNode.next = previousNode;
        previousNode = currentNode;

        if (currentNode.right) {
          queue.unshift(currentNode.right);
          numOfNodesInNextLevel += 1;
        }

        if (currentNode.left) {
          queue.unshift(currentNode.left);
          numOfNodesInNextLevel += 1;
        }
      }
    }

    numOfNodesInLevel = numOfNodesInNextLevel;
  }

  return root;
}

export { _Node, connect };
