class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @returns {ListNode}
 */
function mergeTwoLists(list1, list2) {
  if (!list1 && !list2) return null;
  if (!list1) return list2;
  if (!list2) return list1;

  let current1 = list1;
  let current2 = list2;
  const mergedList = new ListNode();
  let current = mergedList;

  while (current1 && current2) {
    if (current1.val > current2.val) {
      current.next = new ListNode(current2.val);
      current2 = current2.next;
    } else {
      current.next = new ListNode(current1.val);
      current1 = current1.next;
    }

    current = current.next;
  }

  if (current1) current.next = current1;
  if (current2) current.next = current2;

  return mergedList.next;
}

export { ListNode, mergeTwoLists };
