package dev.merge_two_sorted_lists;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  private Solution solution = new Solution();

  @Test
  void CaseOne() {
    assertThat(this.solution.mergeTwoLists(
                   new ListNode(1, new ListNode(2, new ListNode(4))),
                   new ListNode(1, new ListNode(3, new ListNode(4)))))
        .usingRecursiveComparison()
        .isEqualTo(new ListNode(
            1,
            new ListNode(
                1, new ListNode(
                       2, new ListNode(3, new ListNode(4, new ListNode(4)))))));
  }

  @Test
  void CaseTwo() {
    assertNull(this.solution.mergeTwoLists(null, null));
  }

  @Test
  void CaseThree() {
    assertThat(this.solution.mergeTwoLists(null, new ListNode(0)))
        .usingRecursiveComparison()
        .isEqualTo(new ListNode(0));
  }
}
