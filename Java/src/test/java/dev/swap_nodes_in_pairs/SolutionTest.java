package dev.swap_nodes_in_pairs;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  @Test
  @Disabled
  void CaseOne() {
    ListNode head =
        new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

    assertEquals(
        new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(3)))),
        new Solution().swapPairs(head));
  }

  @Test
  @Disabled
  void CaseTwo() {
    assertEquals(null, new Solution().swapPairs(null));
  }

  @Test
  @Disabled
  void CaseThree() {
    ListNode head = new ListNode(1);

    assertEquals(new ListNode(1), new Solution().swapPairs(head));
  }

  @Test
  @Disabled
  void CaseFour() {
    ListNode head = new ListNode(1, new ListNode(2, new ListNode(3)));

    assertEquals(new ListNode(2, new ListNode(1, new ListNode(3))),
                 new Solution().swapPairs(head));
  }
}
