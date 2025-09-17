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
  let level = 0;

  while (queue.length > 0) {
    let previousNode = null;

    for (let i = Math.pow(2, level); i > 0; i -= 1) {
      const currentNode = queue.pop();

      if (currentNode) {
        currentNode.next = previousNode;
        queue.unshift(currentNode.left, currentNode.right);
        previousNode = currentNode;
      }
    }

    level += 1;
  }

  return root;
}

export { _Node, connect };
