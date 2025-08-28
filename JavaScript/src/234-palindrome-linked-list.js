class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} head
 * @returns {boolean}
 */
function isPalindrome(head) {
  let set = [];
  let size = 0;
  let current = head;

  while (current) {
    current = current.next;
    size += 1;
  }

  if (size <= 2) return false;
  console.log(size);
  current = head;
}

export { ListNode, isPalindrome };
