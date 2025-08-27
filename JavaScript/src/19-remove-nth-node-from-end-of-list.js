class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @returns {ListNode}
 */
function removeNthFromEnd(head, n) {
  if (!head || !head.next) return null;

  let current = head;
  let size = 1;

  while (current.next) {
    current = current.next;
    size += 1;
  }

  current = head;
  let stop = size - n;

  if (stop === 0) return head.next;

  while (stop > 1) {
    current = current.next;
    stop -= 1;
  }

  if (current.next.next) {
    current.next = current.next.next;
  } else {
    current.next = null;
  }

  return head;
}

export { ListNode, removeNthFromEnd };
