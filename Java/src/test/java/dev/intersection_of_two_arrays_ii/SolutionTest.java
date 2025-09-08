package dev.intersection_of_two_arrays_ii;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  @Test
  void CaseOne() {
    assertArrayEquals(
        new int[] {2, 2},
        new Solution().intersect(new int[] {1, 2, 2, 1}, new int[] {2, 2}));
  }

  @Test
  void CaseTwo() {
    assertArrayEquals(new int[] {9, 4},
                      new Solution().intersect(new int[] {4, 9, 5},
                                               new int[] {9, 4, 9, 8, 4}));
  }
}
