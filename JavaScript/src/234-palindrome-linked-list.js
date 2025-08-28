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

  if (size === 1) return true;
  const mid = Math.floor(size / 2);
  let pointer = 0;
  current = head;

  while (current) {
    if (pointer < mid) {
      set.push(current.val);
    } else if ((size % 2 === 0 && pointer >= mid) || pointer > mid) {
      const popped = set.pop();
      if (current.val !== popped) return false;
    }

    current = current.next;
    pointer += 1;
  }

  return set.length === 0;
}

export { ListNode, isPalindrome };
