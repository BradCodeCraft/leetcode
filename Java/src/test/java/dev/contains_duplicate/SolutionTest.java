package dev.contains_duplicate;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  @Test
  public void CaseOne() {
    assertTrue(new Solution().containsDuplicate(new int[] {1, 2, 3, 1}));
  }

  @Test
  public void CaseTwo() {
    assertFalse(new Solution().containsDuplicate(new int[] {1, 2, 3, 4}));
  }

  @Test
  public void CaseThree() {
    assertTrue(new Solution().containsDuplicate(
        new int[] {1, 1, 1, 3, 3, 4, 3, 2, 4, 2}));
  }
}
