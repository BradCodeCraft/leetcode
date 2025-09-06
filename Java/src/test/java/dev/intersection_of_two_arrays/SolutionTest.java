package dev.intersection_of_two_arrays;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  @Test
  public void CaseOne() {
    assertArrayEquals(
        new int[] {2},
        new Solution().intersection(new int[] {1, 2, 2, 1}, new int[] {2, 2}));
  }

  @Test
  public void CaseTwo() {
    assertArrayEquals(new int[] {4, 9},
                      new Solution().intersection(new int[] {4, 9, 5},
                                                  new int[] {9, 4, 9, 8, 4}));
  }
}
