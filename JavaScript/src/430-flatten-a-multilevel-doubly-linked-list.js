class _Node {
  constructor(val, prev, next, child) {
    this.val = val;
    /** @type {_Node} */
    this.prev = prev ? prev : null;
    /** @type {_Node} */
    this.next = next ? next : null;
    /** @type {_Node} */
    this.child = child ? child : null;
  }
}

/**
 * @param {_Node} head
 * @returns {_Node}
 */
function flatten(head) {
  if (!head) return null;

  let stack = [head];
  const flattened = new _Node(0);
  let flattenedCur = flattened;

  while (stack.length !== 0) {
    const popped = stack.pop();

    if (popped) {
      flattenedCur.next = new _Node(popped.val);
      flattenedCur.next.prev = flattenedCur;

      if (popped.next) stack.push(popped.next);
      if (popped.child) stack.push(popped.child);

      flattenedCur = flattenedCur.next;
    }
  }

  flattened.next.prev = null;
  return flattened.next;
}

export { _Node, flatten };
