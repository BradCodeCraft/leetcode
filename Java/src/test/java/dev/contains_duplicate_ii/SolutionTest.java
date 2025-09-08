package dev.contains_duplicate_ii;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  @Test
  void CaseOne() {
    assertTrue(
        new Solution().containsNearbyDuplicate(new int[] {1, 2, 3, 1}, 3));
  }

  @Test
  void CaseTwo() {
    assertTrue(
        new Solution().containsNearbyDuplicate(new int[] {1, 0, 1, 1}, 1));
  }

  @Test
  void CaseThree() {
    assertFalse(new Solution().containsNearbyDuplicate(
        new int[] {1, 2, 3, 1, 2, 3}, 2));
  }
}
