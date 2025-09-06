package dev.single_number;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

/**
 * SolutionTest
 */
public class SolutionTest {
  @Test
  public void CaseOne() {
    assertEquals(1, new Solution().singleNumber(new int[] {2, 2, 1}));
  }

  @Test
  public void CaseTwo() {
    assertEquals(4, new Solution().singleNumber(new int[] {4, 1, 2, 1, 2}));
  }

  @Test
  public void CaseThree() {
    assertEquals(1, new Solution().singleNumber(new int[] {1}));
  }
}
