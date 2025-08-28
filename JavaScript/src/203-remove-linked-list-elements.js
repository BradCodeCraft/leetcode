class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @returns {ListNode}
 */
function removeElements(head, val) {
  const newHead = new ListNode(0, head);
  let prev = newHead;
  let current = head;

  while (current) {
    if (current.val === val) {
      prev.next = current.next;
    } else {
      prev = current;
    }

    current = current.next;
  }

  return newHead.next;
}

export { ListNode, removeElements };
