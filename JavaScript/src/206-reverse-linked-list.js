class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @returns {ListNode}
 */
function reverseList(head) {
  if (!head) return null;
  if (!head.next) return head;

  let newHead = new ListNode(head.val);
  let current = head.next;

  while (current.next) {
    const oldHead = new ListNode(newHead.val);
    oldHead.next = newHead.next;

    newHead = new ListNode(current.val);
    newHead.next = oldHead;

    current = current.next;
  }

  const oldHead = new ListNode(newHead.val);
  oldHead.next = newHead.next;

  newHead = new ListNode(current.val);
  newHead.next = oldHead;

  return newHead;
}

export { ListNode, reverseList };
