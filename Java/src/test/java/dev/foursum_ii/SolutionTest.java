package dev.foursum_ii;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  @Test
  void CaseOne() {
    assertEquals(
        2, new Solution().fourSumCount(new int[] {1, 2}, new int[] {-2, -1},
                                       new int[] {-1, 2}, new int[] {0, 2}));
  }

  @Test
  void CaseTwo() {
    assertEquals(1, new Solution().fourSumCount(new int[] {0}, new int[] {0},
                                                new int[] {0}, new int[] {0}));
  }

  @Test
  void CaseThree() {
    assertEquals(
        6, new Solution().fourSumCount(new int[] {-1, -1}, new int[] {-1, 1},
                                       new int[] {-1, 1}, new int[] {1, -1}));
  }

  @Test
  void Failed() {
    assertEquals(17, new Solution().fourSumCount(
                         new int[] {0, 1, -1}, new int[] {-1, 1, 0},
                         new int[] {0, 0, 1}, new int[] {-1, 1, 1}));
  }
}
