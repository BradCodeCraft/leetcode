class ListNode {
  constructor(val, next) {
    this.val = val ? val : 0;
    this.next = next ? next : null;
  }
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @returns {ListNode}
 */
function rotateRight(head, k) {
  if (!head) return null;
  if (k === 0) return head;

  let size = 0;
  let cur = head;

  while (cur) {
    cur = cur.next;
    size += 1;
  }

  cur = head;
  let numberOfRotations = k % size;

  if (numberOfRotations === 0) {
    return head;
  }

  let startingIndex = size - numberOfRotations;

  while (startingIndex > 0) {
    cur = cur.next;
    startingIndex -= 1;
  }

  const rotated = cur;
  let rotatedCur = rotated;
  let newSize = 0;
  cur = head;

  while (rotatedCur.next) {
    rotatedCur = rotatedCur.next;
    newSize += 1;
  }

  while (size > newSize + 1) {
    rotatedCur.next = new ListNode(cur.val);

    rotatedCur = rotatedCur.next;
    cur = cur.next;
    newSize += 1;
  }

  return rotated;
}

export { ListNode, rotateRight };
