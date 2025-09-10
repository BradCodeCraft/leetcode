package dev.reverse_linked_list;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  @Test
  @Disabled
  void CaseOne() {
    ListNode head = new ListNode(
        1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

    assertEquals(
        new ListNode(
            5,
            new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1))))),
        new Solution().reverseList(head));
  }

  @Test
  @Disabled
  void CaseTwo() {
    ListNode head = new ListNode(1, new ListNode(2));

    assertEquals(new ListNode(2, new ListNode(1)),
                 new Solution().reverseList(head));
  }

  @Test
  @Disabled
  void CaseThree() {
    assertNull(new Solution().reverseList(null));
  }
}
