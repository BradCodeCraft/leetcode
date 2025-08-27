class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @returns {ListNode}
 */
function getIntersectionNode(headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let temporaryA = headA;
  let sizeA = 0;
  let temporaryB = headB;
  let sizeB = 0;

  while (temporaryA.next !== null) {
    temporaryA = temporaryA.next;
    sizeA += 1;
  }

  while (temporaryB.next !== null) {
    temporaryB = temporaryB.next;
    sizeB += 1;
  }

  if (temporaryA !== temporaryB) return null;

  temporaryA = headA;
  temporaryB = headB;

  while (sizeA > sizeB) {
    temporaryA = temporaryA.next;
    sizeA -= 1;
  }

  while (sizeB > sizeA) {
    temporaryB = temporaryB.next;
    sizeB -= 1;
  }

  while (temporaryA !== temporaryB) {
    temporaryA = temporaryA.next;
    temporaryB = temporaryB.next;
  }

  return temporaryA;
}

export { ListNode, getIntersectionNode };
