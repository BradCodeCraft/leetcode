package dev.two_sum;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  @Test
  void CaseOne() {
    assertArrayEquals(new int[] {0, 1},
                      new Solution().twoSum(new int[] {2, 7, 11, 15}, 9));
  }

  @Test
  void CaseTwo() {
    assertArrayEquals(new int[] {1, 2},
                      new Solution().twoSum(new int[] {3, 2, 4}, 6));
  }

  @Test
  void CaseThree() {
    assertArrayEquals(new int[] {0, 1},
                      new Solution().twoSum(new int[] {3, 3}, 6));
  }
}
