package dev.swap_nodes_in_pairs;

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
  private ListNode swap(ListNode head) {
    if (head == null || head.next == null)
      return head;

    int current = head.val;
    head.val = head.next.val;
    head.next.val = current;
    this.swap(head.next.next);

    return head;
  }

  public ListNode swapPairs(ListNode head) { return this.swap(head); }
}
