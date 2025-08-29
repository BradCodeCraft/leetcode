class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
function addTwoNumbers(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let carryOver = 0;
  let pointer1 = l1;
  let pointer2 = l2;
  let sumHead = new ListNode();
  let pointer = sumHead;

  while (pointer1 && pointer2) {
    let sum = pointer1.val + pointer2.val + carryOver;
    carryOver = 0;

    if (sum >= 10) {
      sum %= 10;
      carryOver = 1;
    }

    pointer.next = new ListNode(sum);

    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
    pointer = pointer.next;
  }

  while (pointer1) {
    let sum = pointer1.val + carryOver;
    carryOver = 0;

    if (sum >= 10) {
      sum %= 10;
      carryOver = 1;
    }

    pointer.next = new ListNode(sum);

    pointer1 = pointer1.next;
    pointer = pointer.next;
  }

  while (pointer2) {
    let sum = pointer2.val + carryOver;
    carryOver = 0;

    if (sum >= 10) {
      sum %= 10;
      carryOver = 1;
    }

    pointer.next = new ListNode(sum);

    pointer2 = pointer2.next;
    pointer = pointer.next;
  }

  if (carryOver === 1) {
    pointer.next = new ListNode(1);
  }

  return sumHead.next;
}

export { ListNode, addTwoNumbers };
