class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} head
 * @returns {ListNode}
 */
function oddEvenList(head) {
  if (!head) return null;

  let current = head;
  let even = current.next;
  let evenPointer = even;

  while (current.next && current.next.next) {
    current.next = current.next.next;
    evenPointer.next = evenPointer.next.next;
    current = current.next;
    evenPointer = evenPointer.next;
  }

  current.next = even;
  return head;
}

export { ListNode, oddEvenList };
