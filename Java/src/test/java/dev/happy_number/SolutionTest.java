package dev.happy_number;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  @Test
  public void CaseOne() {
    assertTrue(new Solution().isHappy(19));
  }

  @Test
  public void CaseTwo() {
    assertFalse(new Solution().isHappy(2));
  }
}
