class _Node {
  constructor(val, next, random) {
    this.val = val;
    this.next = next ? next : null;
    this.random = random ? random : null;
  }
}

/**
 * @param {_Node} head
 * @returns {_Node}
 */
function copyRandomList(head) {
  if (!head) return null;

  let cur = head;

  while (cur) {
    cur.next = new _Node(cur.val, cur.next);

    cur = cur.next.next;
  }

  cur = head;

  while (cur) {
    cur.next.random = cur.random;

    cur = cur.next.next;
  }

  let oldHead = head;
  let newHead = head.next;
  let oldHeadCur = oldHead;
  let newHeadCur = newHead;

  while (oldHeadCur) {
    oldHeadCur.next = oldHeadCur.next.next;
    newHeadCur.next = newHeadCur.next ? newHeadCur.next.next : null;

    oldHeadCur = oldHeadCur.next;
    newHeadCur = newHeadCur.next;
  }

  return newHead;
}

export { _Node, copyRandomList };
