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
function detectCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) break;
  }

  if (!fast || !fast.next) {
    return null;
  }

  fast = head;

  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

export { ListNode, detectCycle };
