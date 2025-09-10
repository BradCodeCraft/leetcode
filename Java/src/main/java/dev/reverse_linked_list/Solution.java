package dev.reverse_linked_list;

class ListNode {
  int val;
  ListNode next;
  ListNode() {}
  ListNode(int val) { this.val = val; }
  ListNode(int val, ListNode next) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Solution
 */
public class Solution {
  public ListNode reverseList(ListNode head) {
    if (head == null || head.next == null) {
      return head;
    }

    ListNode newHead = this.reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
  }
}
